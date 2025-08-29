# Teams Meeting Creation Troubleshooting Guide

## Current Issue
The API is falling back to mock mode because real Teams meetings cannot be created. The `joinUrl` contains `"mock-tenant"` instead of the real tenant ID.

## Root Cause Analysis

### 1. Permission Issues ✅ RESOLVED
- ✅ Admin consent has been granted for all Application permissions
- ✅ `User.Read.All` permission works (can read user data)
- ❌ `OnlineMeetings.ReadWrite.AI` permission fails with 404

### 2. User License Issues ❌ LIKELY CAUSE
The user `admin@thrivebrands.ai` may not have:
- ❌ Microsoft Teams license
- ❌ Permission to create online meetings
- ❌ Proper user account configuration

### 3. Endpoint Issues ❌ POSSIBLE CAUSE
The Microsoft Graph API endpoints may not be working as expected:
- ❌ `/users/{userId}/onlineMeetings` - Returns 404
- ❌ `/users/{userPrincipalName}/onlineMeetings` - Returns 404
- ❌ `/me/onlineMeetings` - May not work with application permissions

## Solutions

### Solution 1: Check User License (Recommended)

1. **Go to Azure Portal** → **Azure Active Directory** → **Users**
2. **Find `admin@thrivebrands.ai`**
3. **Click on "Licenses"**
4. **Ensure the user has:**
   - ✅ Microsoft 365 Business Basic or higher
   - ✅ Microsoft Teams license enabled
   - ✅ Exchange Online license (for calendar integration)

### Solution 2: Use a Different User

Try using a different user who definitely has Teams permissions:

1. **Create a test user** with full Teams permissions
2. **Update the environment variable:**
   ```bash
   ORGANIZER_EMAIL=testuser@thrivebrands.ai
   ```
3. **Test the API again**

### Solution 3: Use Delegated Permissions Instead

Switch from Application permissions to Delegated permissions:

1. **Update the authentication flow** to use Authorization Code instead of Client Credentials
2. **Use the user's own permissions** instead of application permissions
3. **This requires user interaction** but avoids license issues

### Solution 4: Use Microsoft Graph Beta API

Try using the beta endpoint which may have different behavior:

```javascript
// Instead of v1.0, use beta
const response = await axios.post(
  `https://graph.microsoft.com/beta/users/${organizerEmail}/onlineMeetings`,
  // ... rest of the code
);
```

### Solution 5: Use Teams Admin Center API

As an alternative, use the Teams Admin Center API:

```javascript
const response = await axios.post(
  `https://graph.microsoft.com/v1.0/communications/callRecords`,
  // ... different payload structure
);
```

## Testing Steps

### Step 1: Verify User Permissions
```bash
# Test if user can be read
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "https://graph.microsoft.com/v1.0/users/admin@thrivebrands.ai"
```

### Step 2: Test Meeting Creation Directly
```bash
# Test meeting creation with Graph Explorer
# Go to: https://developer.microsoft.com/en-us/graph/graph-explorer
# Use the same token and try the endpoints manually
```

### Step 3: Check Teams License
```bash
# Check user's assigned licenses
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "https://graph.microsoft.com/v1.0/users/admin@thrivebrands.ai/assignedLicenses"
```

## Expected Behavior After Fix

✅ **Success Response:**
```json
{
  "success": true,
  "message": "Discovery call scheduled successfully",
  "meeting": {
    "id": "real-meeting-id",
    "joinUrl": "https://teams.microsoft.com/l/meetup-join/19:meeting_real-id@thread.v2/0?context={\"Tid\":\"c2d63033-4074-49e5-ad27-48ab90d4d09f\",\"Oid\":\"admin@thrivebrands.ai\"}",
    "startDateTime": "2025-08-28T04:30:00.000Z",
    "endDateTime": "2025-08-28T05:00:00.000Z"
  },
  "emailSent": true
}
```

❌ **Current Response (Mock Mode):**
```json
{
  "meeting": {
    "joinUrl": "https://teams.microsoft.com/l/meetup-join/19:meeting_id@thread.v2/0?context={\"Tid\":\"mock-tenant\",\"Oid\":\"admin@thrivebrands.ai\"}"
  }
}
```

## Quick Fix Recommendation

**Try Solution 1 first** - Check if `admin@thrivebrands.ai` has a proper Microsoft Teams license. This is the most likely cause of the 404 errors.

If that doesn't work, **try Solution 2** - Use a different user who definitely has Teams permissions.

## Debug Information

The server logs show:
- ✅ User can be read: `User.Read.All permission works: Admin`
- ❌ Meeting creation fails: `OnlineMeetings.ReadWrite.AI permission failed: 404`

This indicates the user exists but cannot create meetings, which is typically a license or permission issue.

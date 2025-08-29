# Azure AD Permissions Fix Guide

## Current Issue
You're getting an `Authorization_RequestDenied` error with message `Insufficient privileges to complete the operation` when trying to create Teams meetings.

## Root Cause
The Azure AD application "Thrive" has several **Application** permissions that are **"Not granted"** and require admin consent:

- `Calendars.ReadWrite` (Application)
- `Mail.Send` (Application) 
- `OnlineMeetings.ReadWrite.AI` (Application)
- `User.Read.All` (Application)

## Solution Steps

### Step 1: Grant Admin Consent for Application Permissions

1. **Go to Azure Portal** → **Azure Active Directory** → **App registrations**
2. **Find your "Thrive" application**
3. **Click on "API permissions"** (you should see the same screen as in your screenshot)
4. **Look for the checkbox**: "Grant admin consent for Incircle Ecoproducts Pvt Ltd"
5. **Check this checkbox** and click **"Grant admin consent"**

### Step 2: Verify Required Permissions

Make sure these permissions are granted with admin consent:

#### Required Application Permissions:
- ✅ `OnlineMeetings.ReadWrite.AI` - Read and create online meetings
- ✅ `User.Read.All` - Read all users' full profiles  
- ✅ `Calendars.ReadWrite` - Read and write calendars in all mailboxes
- ✅ `Mail.Send` - Send mail as any user

#### Required Delegated Permissions (should already be granted):
- ✅ `User.Read` - Sign in and read user profile
- ✅ `Calendars.ReadWrite` - Have full access to user calendars
- ✅ `Calendars.ReadWrite.Shared` - Read and write user and shared calendars
- ✅ `OnlineMeetings.ReadWrite` - Read and create user's online meetings

### Step 3: Alternative Solution - Use Delegated Permissions

If you continue having issues with Application permissions, you can modify the code to use **Delegated permissions** instead:

1. **Change the authentication flow** from Client Credentials to Authorization Code
2. **Use delegated permissions** which are already granted
3. **This requires user interaction** but avoids admin consent issues

### Step 4: Test the Fix

After granting admin consent:

1. **Restart your server**
2. **Test the API endpoint**: `POST http://localhost:5000/api/schedule-discovery-call`
3. **Check the logs** - you should see "✅ Teams meeting created successfully" instead of permission errors

## Expected Behavior After Fix

✅ **Success Response:**
```json
{
  "success": true,
  "message": "Discovery call scheduled successfully",
  "meeting": {
    "id": "actual-meeting-id",
    "joinUrl": "https://teams.microsoft.com/l/meetup-join/...",
    "startDateTime": "2025-08-28T04:30:00.000Z",
    "endDateTime": "2025-08-28T05:00:00.000Z"
  },
  "emailSent": true
}
```

❌ **Current Error (will be fixed):**
```
❌ Permission denied. This is likely due to missing admin consent for application permissions.
❌ Required permissions that need admin consent:
   - OnlineMeetings.ReadWrite.All (Application)
   - User.Read.All (Application)
   - Calendars.ReadWrite (Application)
```

## Important Notes

1. **Admin consent is required** for Application permissions because they can access data across the entire tenant
2. **Only Global Administrators** can grant admin consent
3. **The user `admin@thrivebrands.ai` exists** - the issue is permissions, not user existence
4. **Your current code will work** once admin consent is granted

## Troubleshooting

If you still get errors after granting admin consent:

1. **Wait 5-10 minutes** for permissions to propagate
2. **Check if you're a Global Administrator** in the tenant
3. **Verify the application has the correct permissions** in the API permissions section
4. **Check the audit logs** in Azure AD to see if consent was granted successfully

## Code Changes Made

The server code has been updated to:
- Provide better error messages distinguishing between permission issues and user not found
- Use a more direct approach for creating meetings
- Give specific guidance on which permissions need admin consent

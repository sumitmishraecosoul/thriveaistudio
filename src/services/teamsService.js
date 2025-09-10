// Microsoft Teams Meeting Integration Service
// This service handles the creation and management of Teams meetings

class TeamsService {
  constructor() {
    // You'll need to configure these with your Microsoft Graph API credentials
    // Using import.meta.env for Vite instead of process.env
    this.clientId = import.meta.env.VITE_MICROSOFT_CLIENT_ID || 'demo-client-id';
    this.tenantId = import.meta.env.VITE_MICROSOFT_TENANT_ID || 'demo-tenant-id';
    this.clientSecret = import.meta.env.VITE_MICROSOFT_CLIENT_SECRET || 'demo-secret';
    this.organizerEmail = import.meta.env.VITE_ORGANIZER_EMAIL || 'admin@thrivebrands.ai';
  }

  // Generate a Microsoft Teams meeting link
  async createTeamsMeeting(meetingDetails) {
    try {
      // Prepare the request body - use the exact format expected by backend
      const requestBody = {
        selectedDate: meetingDetails.selectedDate,
        selectedTime: meetingDetails.selectedTime,
        userDetails: meetingDetails.userDetails,
        guestEmails: meetingDetails.guestEmails || []
        // Organizer selection removed - managed internally
      };

      // Call the backend API to create a real Teams meeting
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      
      console.log('=== TEAMS SERVICE API CALL ===');
      console.log('🌐 API URL:', `${apiBaseUrl}/api/schedule-discovery-call`);
      console.log('📦 Request Body:', JSON.stringify(requestBody, null, 2));
      console.log('📋 Request Headers:', {
        'Content-Type': 'application/json'
      });
      console.log('================================');
      const response = await fetch(`${apiBaseUrl}/api/schedule-discovery-call`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
      
      console.log('=== API RESPONSE ===');
      console.log('📊 Response Status:', response.status);
      console.log('📊 Response OK:', response.ok);
      console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()));
      console.log('===================');

      // Check if response is ok
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Backend server is not running. Please start the server first.');
        }
        
        // Try to get the error message from the response
        try {
          const errorData = await response.json();
          throw new Error(`Server error: ${response.status} - ${errorData.error || 'Unknown error'}`);
        } catch (parseError) {
          throw new Error(`Server error: ${response.status}`);
        }
      }

      const result = await response.json();
      
      console.log('=== API RESPONSE BODY ===');
      console.log('📊 Response Data:', JSON.stringify(result, null, 2));
      console.log('========================');
      
      if (result.success) {
        return {
          success: true,
          meetingLink: result.meeting.joinUrl,
          meetingId: result.meeting.id,
          joinUrl: result.meeting.joinUrl,
          conferenceId: result.meeting.id,
          passcode: this.generatePasscode()
        };
      } else {
        throw new Error(result.error || 'Failed to create meeting');
      }
    } catch (error) {
      console.error('Error creating Teams meeting:', error);
      
      // If it's a network error (server not running), provide helpful message
      if (error.message.includes('Failed to fetch') || error.message.includes('Backend server is not running')) {
        return {
          success: false,
          error: 'Backend server is not running. Please start the server first by running "cd server && npm run dev" in your terminal.'
        };
      }
      
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Generate a unique meeting ID
  generateMeetingId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  // Generate a meeting passcode
  generatePasscode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Send meeting invitation email
  async sendMeetingInvitation(meetingData, userDetails) {
    try {
      // This would integrate with your email service (EmailJS, SendGrid, etc.)
      const emailData = {
        to: userDetails.email,
        subject: `Discovery Call Confirmation - ${meetingData.date}`,
        html: this.generateEmailTemplate(meetingData, userDetails)
      };

      // For now, we'll simulate sending the email
      console.log('Meeting invitation email data:', emailData);
      
      return {
        success: true,
        message: 'Meeting invitation sent successfully'
      };
    } catch (error) {
      console.error('Error sending meeting invitation:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Generate email template for meeting invitation
  generateEmailTemplate(meetingData, userDetails) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1A5069;">Discovery Call Confirmation</h2>
        
        <p>Dear ${userDetails.firstName} ${userDetails.lastName},</p>
        
        <p>Your Discovery Call has been successfully scheduled. Here are the details:</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0F7BAE; margin-top: 0;">Meeting Details</h3>
          <p><strong>Date:</strong> ${meetingData.date}</p>
          <p><strong>Time:</strong> ${meetingData.time} (${meetingData.timezone})</p>
          <p><strong>Duration:</strong> 30 minutes</p>
          <p><strong>Platform:</strong> Microsoft Teams</p>
          <p><strong>Organizer:</strong> Anna (Thrive Team)</p>
        </div>
        
        <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0F7BAE; margin-top: 0;">Join Meeting</h3>
          <p>Click the link below to join the meeting:</p>
          <a href="${meetingData.meetingLink}" style="background-color: #1A5069; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Join Microsoft Teams Meeting
          </a>
        </div>
        
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #856404; margin-top: 0;">Important Notes</h3>
          <ul>
            <li>Please join the meeting 5 minutes before the scheduled time</li>
            <li>Make sure you have a stable internet connection</li>
            <li>Test your microphone and camera before joining</li>
            <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
          </ul>
        </div>
        
        <p>We're excited to discuss how we can help you thrive!</p>
        
        <p>Best regards,<br>
        The Thrive Team</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 12px; color: #666;">
          This is an automated message. Please do not reply to this email.
        </p>
      </div>
    `;
  }

  // Validate meeting time availability
  async checkAvailability(date, time) {
    try {
      // In production, this would check against your calendar system
      // For now, we'll return true (available)
      return {
        available: true,
        message: 'Time slot is available'
      };
    } catch (error) {
      console.error('Error checking availability:', error);
      return {
        available: false,
        error: error.message
      };
    }
  }

  // Cancel or reschedule a meeting
  async updateMeeting(meetingId, updates) {
    try {
      // In production, this would update the meeting via Microsoft Graph API
      console.log('Updating meeting:', meetingId, updates);
      
      return {
        success: true,
        message: 'Meeting updated successfully'
      };
    } catch (error) {
      console.error('Error updating meeting:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default new TeamsService();

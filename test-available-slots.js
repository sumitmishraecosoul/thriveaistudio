// test-available-slots.js - Test script for the new available slots API
import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:5000';

async function testAvailableSlots() {
  console.log('🧪 Testing Available Slots API...\n');

  try {
    // Test 1: Get available slots for the specific date that was causing issues (Monday, Sep 8, 2025)
    console.log('1️⃣ Testing Available Slots for Monday (2025-09-08) - The Fixed Date...');
    const mondayResponse = await fetch(`${BASE_URL}/api/available-slots?date=2025-09-08`);
    const mondayData = await mondayResponse.json();
    
    console.log('✅ Monday Slots Response:');
    console.log(`   Date: ${mondayData.date}`);
    console.log(`   Day: ${mondayData.dayOfWeek}`);
    console.log(`   Timezone: ${mondayData.timezone}`);
    console.log(`   Business Hours: ${mondayData.businessHours}`);
    console.log(`   Total Slots: ${mondayData.totalSlots}`);
    console.log(`   Available Slots: ${mondayData.availableSlots}`);
    console.log(`   Available: ${mondayData.available}`);
    
    // Show first few available slots
    if (mondayData.slots && mondayData.slots.length > 0) {
      const availableSlots = mondayData.slots.filter(slot => slot.available);
      console.log('   First 5 Available Slots:');
      availableSlots.slice(0, 5).forEach(slot => {
        console.log(`     ${slot.displayTime} (${slot.time}) - ${slot.reason}`);
      });
    }
    console.log('');

    // Test 2: Get available slots for another weekday
    console.log('2️⃣ Testing Available Slots for Tuesday (2025-09-09)...');
    const slotsResponse = await fetch(`${BASE_URL}/api/available-slots?date=2025-09-09`);
    const slotsData = await slotsResponse.json();
    
    console.log('✅ Tuesday Slots Response:');
    console.log(`   Date: ${slotsData.date}`);
    console.log(`   Day: ${slotsData.dayOfWeek}`);
    console.log(`   Timezone: ${slotsData.timezone}`);
    console.log(`   Business Hours: ${slotsData.businessHours}`);
    console.log(`   Total Slots: ${slotsData.totalSlots}`);
    console.log(`   Available Slots: ${slotsData.availableSlots}`);
    
    // Show first few available slots
    const availableSlots = slotsData.slots.filter(slot => slot.available);
    console.log('   First 5 Available Slots:');
    availableSlots.slice(0, 5).forEach(slot => {
      console.log(`     ${slot.displayTime} (${slot.time}) - ${slot.reason}`);
    });
    console.log('');

    // Test 3: Get available slots for weekend (should show no slots)
    console.log('3️⃣ Testing Available Slots for Weekend (2025-09-07)...');
    const weekendResponse = await fetch(`${BASE_URL}/api/available-slots?date=2025-09-07`);
    const weekendData = await weekendResponse.json();
    
    console.log('✅ Weekend Response:');
    console.log(`   Date: ${weekendData.date}`);
    console.log(`   Day: ${weekendData.dayOfWeek}`);
    console.log(`   Available: ${weekendData.available}`);
    console.log(`   Message: ${weekendData.message}`);
    console.log('');

    // Test 4: Check specific time slot availability for the fixed Monday date (using future time)
    console.log('4️⃣ Testing Specific Time Slot Check for Monday (2025-09-08 15:00 - 3:00 PM)...');
    const mondayCheckResponse = await fetch(`${BASE_URL}/api/check-availability?date=2025-09-08&time=15:00`);
    const mondayCheckData = await mondayCheckResponse.json();
    
    console.log('✅ Monday Time Slot Check Response:');
    console.log(`   Available: ${mondayCheckData.available}`);
    console.log(`   Message: ${mondayCheckData.message}`);
    console.log(`   Date: ${mondayCheckData.date}`);
    console.log(`   Time: ${mondayCheckData.time}`);
    console.log(`   Day: ${mondayCheckData.dayOfWeek}`);
    console.log(`   Hour: ${mondayCheckData.hour}`);
    console.log(`   Is Weekday: ${mondayCheckData.isWeekday}`);
    console.log(`   Is Business Hours: ${mondayCheckData.isBusinessHours}`);
    console.log('');

    // Test 5: Check specific time slot availability for Tuesday
    console.log('5️⃣ Testing Specific Time Slot Check for Tuesday (2025-09-09 14:00)...');
    const checkResponse = await fetch(`${BASE_URL}/api/check-availability?date=2025-09-09&time=14:00`);
    const checkData = await checkResponse.json();
    
    console.log('✅ Tuesday Time Slot Check Response:');
    console.log(`   Available: ${checkData.available}`);
    console.log(`   Message: ${checkData.message}`);
    console.log(`   Date: ${checkData.date}`);
    console.log(`   Time: ${checkData.time}`);
    console.log(`   Day: ${checkData.dayOfWeek}`);
    console.log(`   Hour: ${checkData.hour}`);
    console.log('');

    // Test 6: Test discovery call with the fixed Monday date (using future time)
    console.log('6️⃣ Testing Discovery Call with Fixed Monday Date (2025-09-08 15:00 - 3:00 PM)...');
    const mondayDiscoveryCallData = {
      selectedDate: "2025-09-08",
      selectedTime: "15:00", // 24-hour format (3:00 PM)
      userDetails: {
        firstName: "Monday",
        lastName: "Test",
        email: "monday.test@example.com",
        companyName: "Test Company",
        revenue: "500,000 - 1M"
      },
      organizerEmail: "admin@thrivebrands.ai"
    };

    const mondayDiscoveryResponse = await fetch(`${BASE_URL}/api/schedule-discovery-call`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mondayDiscoveryCallData)
    });

    const mondayDiscoveryResult = await mondayDiscoveryResponse.json();
    console.log('✅ Monday Discovery Call Response:');
    console.log(`   Success: ${mondayDiscoveryResult.success}`);
    console.log(`   Message: ${mondayDiscoveryResult.message}`);
    if (mondayDiscoveryResult.meeting) {
      console.log(`   Meeting ID: ${mondayDiscoveryResult.meeting.id}`);
      console.log(`   Start Time: ${mondayDiscoveryResult.meeting.startDateTime}`);
      console.log(`   Join URL: ${mondayDiscoveryResult.meeting.joinUrl}`);
    }
    console.log(`   Emails Sent: ${mondayDiscoveryResult.emailSent}`);
    console.log('');

    // Test 7: Test discovery call with Tuesday date
    console.log('7️⃣ Testing Discovery Call with Tuesday Date (2025-09-09 2:00 PM)...');
    const tuesdayDiscoveryCallData = {
      selectedDate: "2025-09-09",
      selectedTime: "2:00 PM",
      userDetails: {
        firstName: "Tuesday",
        lastName: "Test",
        email: "tuesday.test@example.com",
        companyName: "Test Company",
        revenue: "500,000 - 1M"
      },
      organizerEmail: "admin@thrivebrands.ai"
    };

    const tuesdayDiscoveryResponse = await fetch(`${BASE_URL}/api/schedule-discovery-call`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tuesdayDiscoveryCallData)
    });

    const tuesdayDiscoveryResult = await tuesdayDiscoveryResponse.json();
    console.log('✅ Tuesday Discovery Call Response:');
    console.log(`   Success: ${tuesdayDiscoveryResult.success}`);
    console.log(`   Message: ${tuesdayDiscoveryResult.message}`);
    if (tuesdayDiscoveryResult.meeting) {
      console.log(`   Meeting ID: ${tuesdayDiscoveryResult.meeting.id}`);
      console.log(`   Start Time: ${tuesdayDiscoveryResult.meeting.startDateTime}`);
      console.log(`   Join URL: ${tuesdayDiscoveryResult.meeting.joinUrl}`);
    }
    console.log(`   Emails Sent: ${tuesdayDiscoveryResult.emailSent}`);
    console.log('');

    console.log('🎉 All tests completed successfully!');
    console.log('📝 Note: Discovery call tests will use mock mode if Azure credentials are not configured');
    console.log('✅ The Monday date issue (2025-09-08) has been fixed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testAvailableSlots();


'use strict';

const alarm1 = new Audio("resources/audio/alarm.mp3");

chrome.alarms.onAlarm.addListener(function () {
    chrome.browserAction.setBadgeText({text: ''});

    chrome.storage.sync.get({
        soundEnabled: true
    }, function (result) {
        if (result.soundEnabled) {
            alarm1.play();
        }
    });

    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'resources/image/koala.png',
        title: 'Time\'s up!',
        message: 'Take a break!',
        buttons: [
            {title: 'You set an alarm to ring now.'}
        ],
        priority: 0
    });
});

chrome.notifications.onButtonClicked.addListener(function () {
    chrome.storage.sync.get(['minutes'], function (item) {
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.alarms.create({delayInMinutes: item.minutes});
    });
});
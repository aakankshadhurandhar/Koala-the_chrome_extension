
'use strict';
//to keep old version working
const alarm1 = document.getElementById('alarm');
async function loadSettings() {
    chrome.storage.sync.get({
        soundEnabled: true,
    },async function (items) {
       
        document.getElementById('sound').checked = items.soundEnabled;}
    )}
    function playQuack() {
        
        var imageDiv = document.getElementById('imageDiv');
        
        
        
       
        
        // play the Sound
        alarm1.play();
        
       
    }

    function setAlarm(event) {
        let minutes = parseFloat(event.target.value);
    
        chrome.browserAction.setBadgeText({
            text: 'ON'
        });
        chrome.alarms.create({
            delayInMinutes: minutes
        });
        chrome.storage.sync.set({
            minutes: minutes
        });
    
        window.close();
    }
    function clearAlarm() {
        chrome.browserAction.setBadgeText({
            text: ''
        });
        chrome.alarms.clearAll();
        window.close();
    }
    
    function setSoundSetting(event) {
        chrome.storage.sync.set({
            soundEnabled: event.target.checked
        });
    }
    document.addEventListener('DOMContentLoaded', loadSettings);
    document.getElementById('koalaImage').addEventListener('click', playQuack);
    document.getElementById('15min').addEventListener('click', setAlarm);
    document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
    document.getElementById('sound').addEventListener('change', setSoundSetting);    
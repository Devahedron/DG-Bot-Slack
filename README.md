# DG-Bot (for Slack)

A simple Slack Bot that has some fun commands.
<img width="725" height="616" alt="slackscreen" src="https://github.com/user-attachments/assets/c65ce322-7863-4806-bacc-173d7c68b0c2" />

## You can try it out in the HackClub Slack!

## Commands:

- dg-bot-ping
- dg-bot-help
- dg-bot-joke
- dg-bot-catfact
- dg-bot-catpic

I followed the SlackBot tutorial from HackClub and my custom command is the catpic command. It isn't very technical/hard to make, but it was hard for me.

## Instructions for running it yourself:

- git
- npm (I used 11.17.0)
- node.js (I used v24.19.0)

1. Clone this repo<br />
`git clone https://github.com/Devahedron/DG-Bot-Slack`

2. Go into the cloned repo's directory<br />
`cd DG-Bot-Slack`

3. Download and install npm packages<br />
`npm install`

4. Create .env<br />
`nano .env`

5. Put your slack tokens into .env<br />
`SLACK_BOT_TOKEN=xoxb-...   # Bot User OAuth Token (from OAuth & Permissions)`<br />
`SLACK_APP_TOKEN=xapp-...   # App-Level Token (from Basic Information → App-Level Tokens)`

6. Run it<br />
`node index.js`

7. See if it work in Slack

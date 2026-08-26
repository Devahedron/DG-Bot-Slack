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

1. Go to Slack dashboard and create an app
https://api.slack.com/apps

2. In "Socket Mode":
- Make sure "Enable Socket Mode" is set to on

3. In "Basic Information" page:
- Click "Generate Tokens and Scopes"
- Give the token a name
- add the connections:write scope
- Click "Generate"
- Save the token starting with "xapp-" for later

4. In "OAuth & Permissions":
- Under "Bot Token Scopes" hit "Add an OAuth Scope"
- Add the following:<br/>
`chat:write`<br/>
`commands`<br/>
`app_mentions:read`<br/>
`channels:history`

5. In "Install App":
- Hit the install button and select where to install it

6. In "OAuth & Permissions":
- Copy the bot token (starts with xoxb-) and save it for later

7. In "Slash Commands":
- Add the commands for the bot (listed in here under "Commands" ^)

8. Install these on your system
- git
- npm (I used 11.17.0)
- node.js (I used v24.19.0)

9. Clone this repo<br/>
`git clone https://github.com/Devahedron/DG-Bot-Slack`

10. Go into the cloned repo's directory<br/>
`cd DG-Bot-Slack`

11. Download and install npm packages<br/>
`npm install`

12. Create .env<br/>
`nano .env`

13. Put your slack tokens into .env<br/>
`SLACK_BOT_TOKEN=xoxb-...   # Bot User OAuth Token (from OAuth & Permissions)`<br/>
`SLACK_APP_TOKEN=xapp-...   # App-Level Token (from Basic Information → App-Level Tokens)`
- To save it hit `ctrl x`, then `y`, then `return`

14. Run it<br/>
`node index.js`

15. See if it works in Slack!

### Create a systemd service for it (for running it 24/7):

1. Create a service file:
- nano /etc/systemd/system/slackbot.service

2. Paste the following into it (edit WorkingDirectory to match your repo path):
> [Unit]<br/>
> Description=Slack Bot<br/>
> After=network-online.target<br/>
> Wants=network-online.target
>  
> [Service]<br/>
> Type=simple<br/>
> User=root<br/>
> Restart=always<br/>
> RestartSec=5<br/>
> WorkingDirectory=/path/to/repo<br/>
> ExecStart=/usr/bin/node index.js
>  
> [Install]<br/>
> WantedBy=multi-user.target

3. Reload it
`systemctl daemon-reload`

4. Enable it
`systemctl enable --now slackbot.service`

5. Confirm it is running
`systemctl status slackbot.service`
`journalctl -u slackbot.service -f`

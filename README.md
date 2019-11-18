# Project: Pigeon
## *Presented by: The Penguin Mafia* 
### ***What is Project: Pigeon?***

Project: Pigeon is a standalone node or drone and with an installed probe that allows the user to collect atmospheric information. 

### But how?

The probe collects air samples from the atmosphere and then returns the collected data to the connected base. The base then can run algorithms that can determine locations where storms are more likely to form, and also where the atmosphere is more acidic **intended to give authorities and the general public a faster time to respond and take corresponding action.**

In a nutshell,
```
ph => time it takes until rain
time => location it will rain. 
Neural Network => uses forecasts to predict chances of acid rain; uses altitude + jet streams to predict location
Probe => samples the air for Ph and possibly other content such as CO2
```


### Visual Representation

This repository includes the source code for the web based interface of the *Pidgeon Acid Rain prediction system™.*

# Starting The Website
Starting the webserver is fairly simple. You'll need to have PHP installed as a prerequisite, and that's all for now *(although tentative to change ;) )*
Once you've configured php to correlate with your environment variables, just run your corresponding shell script (.sh for unix, .bat for windows).
* The manual command to run the website is
`` php -S 0.0.0.0:8000 ``

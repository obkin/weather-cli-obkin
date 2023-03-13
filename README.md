# Weather CLI-utility

A small utility that can show you the weather in the specified region.
You can use it like a program or API for your projects.

How to use:

    To install: npm i -g weather-cli-obkin

    Then you need to set the token: weather -t [TOKEN]
    And then, just set the city: weather -s [CITY]

    Now you can get the weather in setted city: weather

Console commands:

    Open help menu: weather -h

    Set and save token: weather -t [TOKEN]
    Set and save city: weather -s [CITY]

    Get weather: weather

More:

    You can change the city or token without saving, just run the programm so: 

    CITY=city_name weather
    TOKEN=token_name weather

    or: 

    TOKEN=token_name CITY=city_name weather
## Inspiration

With the rise of COVID-19, it's harder for people to go out and visit places they might want to go. Once such example is the Canadian Polar Bear Habitat. It's remote location already limits the number of people that it can reach and a pandemic further decreases that number. There is a need for a virtual experience that matches an in-person visit so that people can be more engaged with the polar bears and the Canadian Polar Bear Habitat.

## What it does

VirtualVisit allows users to have a virtual experience with the Canadian Polar Bear Habitat. It offers an AR viewing of the polar bears, knowledge bites about anatomy adaptations, direct viewing of the website, and much more.

## How we built it

I used React Native for the framework of the app along with Google Cloud Platform's Firebase for authentication of users.

- Firebase
  - User Authentication
  - Realtime Database
    - Stores Data and User Information

React Native

- Framework

GitHub

- File Management
- Hosting

EchoAR

- Polar bear experience from your own home

## Challenges we ran into

I'm not a huge fan of React Native so this project was a way for me to start liking it more. One of the biggest challenges I faced was trying to retrieve data from FireStone, it involved authenticating the users and checking that state on opening the app. Another challenge was trying to display the user's name on the home page. Because I was using stateless components, it became very difficult to try and pass objects. One thing that was particularly frustrating was the paywall that a lot of good models are behind for using with EchoAR. I had to settle for a low-poly image.

## Accomplishments that we're proud of

It's functional! Many times in hackathons before I've lost motivation part way through and I didn't want to continue, but I was able to get through this one. I'm particularly proud of getting Firebase to work as that was a struggle.

## What we learned

- Firebase
- User Authentication
- EchoAR
- WebView in React Native

## What's next for VirtualVisit

- Implement a Meet the Bears page where you can click on each bear and learn more about their personalities
- Implement Radar.io with the ability to calculate how far away you are from the habitat, how fast you can run compared to a polar bear etc.
- Bring in the live feed from the website and make it accessible through the app
- Games to play that help you learn about habitat loss

# DGHA-Proj
DGHA Members Static site and review page[GROUP PROJECT]

Project is to create a mobile app for members of Dog Guide Handlers Association to show business owners current and relevant legislation and information on Handler's Rights of Access etc. The second part of the project is set up a linked site for users of the mobile app to review accessibility of public places and businesses.

## Initial research.

Initial research was in WCAG guidelines for creating a site for any users that may need to use it.
Then looking into tech options.

I nominated myself to look into Prisma and GraphQL as I had an interest in these.
See [GraphQl](https://github.com/cecpoool/DGHA_graphqlReviewTest.git) and [Prisma](https://github.com/cecpoool/DGHA_prismatest.git)
We also initially looking into Angular as an option for the CMS - [Angular test](https://github.com/cecpoool/Angular-tutorial.git)
I also had a play with Gatsby.

## Backend

Backend will not be implemented until the next stage of this product. We will be working in GraphQL or Firebase for the user/review system.

## Frontend

Done in React JS
Initial front end was done in React Bootstrap. My first task in this was after inital build where I went in and separated out the navbar components - trying to figure out the best way to implement the navbars in a mobile browser with the mobile browser viewport issues. I tried a bunch of packages and code fixes but could not get it to work with the navbars at the bottom of the browser. So I moved it to the top(LOL). I implemented a few more CSS fixes and made the navbars fairly functional. Other teammembers inserting GeoLocation components and Translation components. Then a teammate added and implemented some React JS Context.

For the next stage we will be implementing golbal storage using Hooks so I have converted all the class components in the app to functional components to prepare for the next sprint.

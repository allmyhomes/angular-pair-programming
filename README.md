## Frontend Trial Task @allmyhomes

This task consists of writing a modern Hacker News SPA App from scratch.
It may be used as **take-away** or **pair-programming** task lasting a max of 2 hours (based on mutual agreement).
You are encouraged to add your own ideas to improve the function and/or style of the application.

It is preferable if you solve the task using **Angular 10**, but if this is not possible, we are open to seeing your 
solution with **React 17**.

## Setup

Remote coding IDE or pair programming
- You will receive a link to work in a remote IDE Workspace at https://gitpod.io/#{LINK}
- You will need to Login with your GitHub account
- Please share your screen via Google Hangouts / Zoom if doing pair-programming

## App Description

Pull news from the [Hacker News public API](https://github.com/HackerNews/API) and display the following on 
a timeline (based on the given Unix timestamp):

- Top stories 
  - list with items 
  - ordered in chronological order - most recent at the top
- Top stories counter (last 5 days)

Story item content:
- `title`
- `url` - redirect

Note: This API does not require authentication.

## Evaluation Criteria

#### Required

The app functions as expected from the description. It is composed of multiple components, services and css classes.

The focus is on:
- Working features
  - News list displays correct content
  - News list displays items in chronological order
  - News counter displays correct count of news 
- UI and data updates via Reactive programming (RxJS)
- API binding
- Parent-child component organization

#### Additional

Responsive Design
Layout: Clear and Interactive
some Unit Tests

#### Bonus

Clean code

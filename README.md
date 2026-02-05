# Dwellr

Short term property rental desktop web app built with React.

Hosted link: https://dweller-jm.netlify.app/

Backend repo: https://github.com/JHM92/airbNC

# Please note:

- The backend is hosted on a Render's free tier. If the service is inactive for 15 minutes it will go to sleep. It can take around a minute to wake up, so when loading the homepage, it might take some time to load information from the backend.
- User_id is hardcoded to 1
- No responsive design yet so won't display correctly on smaller screens. App was designed on 1920 x 1080 monitor.

# Routes

# /

- Users can browse properties
- Filter based on property type, and price range
- Sort properties by popularity or price.

# /properties/:id

- Users can view more information about a property
- See reviews for the property
- Write a review for the property
- Delete reviews written by you
- Add or remove property to favourites
- View other properties belonging to the host

# /users/:id

- Users can view information about other users
- Edit their own details
- View favourited properties

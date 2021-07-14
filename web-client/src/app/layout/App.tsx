import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Header, List, ListItem} from "semantic-ui-react";
import {Activity} from "../models/activity";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/Activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {activities.map(activity => (
              <ListItem key={activity.id}>
                {activity.title}
              </ListItem>
          ))}
        </List>
    </div>
  );
}

export default App;

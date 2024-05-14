import { useState, useEffect } from 'react';
import { getProfileData, getFriendsListData } from './services/profile';
import { Layout } from './components/layout';
import { Navigation } from './components/navigation';
import { ProfileHeader } from './components/profile-header';
import { ProfilePosts } from './components/profile-posts';
import { ProfileGroups } from './components/profile-groups';
import { ProfileFriends } from './components/profile-friends';
import { Footer } from './components/footer';
import './App.css';
import './main.css';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [friendsListData, setFriendsListData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProfileData()
      .then(data => {
        console.log('profile data:', data);
        setProfileData(data);
      })
      .catch(err => console.log(err));

    getFriendsListData().then(data => {
      console.log('friends list data: ', data);
      setFriendsListData(data);
    });
  }, []);

  useEffect(() => {
    if (profileData && friendsListData) {
      setLoading(false);
    } else setLoading(true);
  }, [profileData, friendsListData]);

  return (
    <Layout>
      <Navigation />
      <div class="content-grid container">
        <div class="content-grid-block--main">
          <ProfileHeader loading={loading} profileData={profileData} />
          <ProfilePosts loading={loading} profileData={profileData} />
          <ProfileGroups loading={loading} profileData={profileData} />
        </div>
        <div class="content-grid-block--friends">
          <ProfileFriends loading={loading} friendsListData={friendsListData} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default App;

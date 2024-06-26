import './style.css';

export const ProfileFriends = ({ loading, friendsListData }) => {
  if (loading)
    return (
      <section id="profile-friends">
        <div class="content-card fade-in">
          <h2 class="page-heading-2">Friends</h2>
          <ul class="profile-friends-list">
            <li class="profile-list-item">
              <div class="profile-list-item-avatar loading"></div>
              <div class="profile-list-item-info">
                <div class="skeleton-block skeleton-block--half loading"></div>
                <div class="skeleton-block--quarter loading"></div>
              </div>
            </li>
            <li class="profile-list-item">
              <div class="profile-list-item-avatar loading"></div>
              <div class="profile-list-item-info">
                <div class="skeleton-block skeleton-block--half loading"></div>
                <div class="skeleton-block--quarter loading"></div>
              </div>
            </li>
            <li class="profile-list-item">
              <div class="profile-list-item-avatar loading"></div>
              <div class="profile-list-item-info">
                <div class="skeleton-block skeleton-block--half loading"></div>
                <div class="skeleton-block--quarter loading"></div>
              </div>
            </li>
            <li class="profile-list-item">
              <div class="profile-list-item-avatar loading"></div>
              <div class="profile-list-item-info">
                <div class="skeleton-block skeleton-block--half loading"></div>
                <div class="skeleton-block--quarter loading"></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );

  const { friends } = friendsListData;

  return (
    <section id="profile-friends">
      <div class="content-card fade-in">
        <h2 class="page-heading-2">Friends</h2>
        <ul class="profile-friends-list">
          {friends.map((friend, index) => (
            <li class="profile-list-item fade-in" key={index}>
              <div
                class="profile-list-item-avatar"
                aria-label="Stuart Raymond"
              ></div>
              <div class="profile-list-item-info">
                <p class="page-paragraph">{friend.name}</p>
                <p class="page-micro">
                  {friend.jobTitle} @ {friend.companyName}
                </p>
                {/* <pre>{JSON.stringify(friend)}</pre> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

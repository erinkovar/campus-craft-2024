import './style.css'

export const ProfileFriends = ({ loading }) => {
  if (loading) return (
    <section id="profile-friends">
      <div class="content-card fade-in">
        <h2 class="page-heading-2">Friends</h2>
        <ul class="profile-friends-list">
          <li class="profile-list-item">
            <div class="profile-list-item-avatar loading"></div>
            <div class="profile-list-item-info">
              <div
                class="skeleton-block skeleton-block--half loading"
              ></div>
              <div class="skeleton-block--quarter loading"></div>
            </div>
          </li>
          <li class="profile-list-item">
            <div class="profile-list-item-avatar loading"></div>
            <div class="profile-list-item-info">
              <div
                class="skeleton-block skeleton-block--half loading"
              ></div>
              <div class="skeleton-block--quarter loading"></div>
            </div>
          </li>
          <li class="profile-list-item">
            <div class="profile-list-item-avatar loading"></div>
            <div class="profile-list-item-info">
              <div
                class="skeleton-block skeleton-block--half loading"
              ></div>
              <div class="skeleton-block--quarter loading"></div>
            </div>
          </li>
          <li class="profile-list-item">
            <div class="profile-list-item-avatar loading"></div>
            <div class="profile-list-item-info">
              <div
                class="skeleton-block skeleton-block--half loading"
              ></div>
              <div class="skeleton-block--quarter loading"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
  return (<div>Not loading</div>);
}

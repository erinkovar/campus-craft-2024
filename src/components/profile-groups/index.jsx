import './style.css';

export const ProfileGroups = ({ loading, profileData }) => {
  if (loading)
    return (
      <section id="profile-groups">
        <h2 class="page-heading-2">Groups</h2>
        <ul class="profile-group-results fade-in">
          <li class="profile-group-results-item">
            <div class="profile-group-results-card content-card skeleton-card">
              <div class="skeleton-img loading"></div>
              <div class="skeleton-block loading"></div>
            </div>
          </li>
          <li class="profile-group-results-item">
            <div class="profile-group-results-card content-card skeleton-card">
              <div class="skeleton-img loading"></div>
              <div class="skeleton-block loading"></div>
            </div>
          </li>
          <li class="profile-group-results-item">
            <div class="profile-group-results-card content-card skeleton-card">
              <div class="skeleton-img loading"></div>
              <div class="skeleton-block loading"></div>
            </div>
          </li>
          <li class="profile-group-results-item">
            <div class="profile-group-results-card content-card skeleton-card">
              <div class="skeleton-img loading"></div>
              <div class="skeleton-block loading"></div>
            </div>
          </li>
        </ul>
      </section>
    );

  const { groups } = profileData;
  return (
    <section id="profile-groups">
      <h2 class="page-heading-2">Groups</h2>
      <ul class="profile-group-results fade-in">
        {groups.map((group) => (
          <li class="profile-group-results-item" key={group.id}>
            <a
              class="profile-group-results-card content-card fade-in"
              href={group.href}
            >
              <div class="profile-group-avatar">
                <img src={group.image} />
              </div>
              <div class="profile-group-content">
                <p class="page-paragraph">{group.name}</p>
              </div>
            </a>
            {/* <pre>{JSON.stringify(group, null, 2)}</pre> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

import './style.css';

export const ProfileHeader = ({ loading, profileData }) => {
  const loadingClass = loading ? 'loading' : '';

  if (loading)
    return (
      <section id="profile-header">
        <div class="profile-header">
          <div class="profile-avatar">
            <img class="loading" src="" />
          </div>
          <div class="profile-info content-card">
            <h1 class="profile-info-name skeleton-block skeleton-block--half loading">
              <img src="" class="profile-underline" />
            </h1>
            <p class="page-paragraph page-paragraph--smoke skeleton-block skeleton-block--quarter loading"></p>
          </div>
        </div>
      </section>
    );

  const fullName = `${profileData.firstName} ${profileData.lastName}`;

  return (
    <section id="profile-header">
      <div class="profile-header">
        <div class="profile-avatar">
          <img class="loading" src="/avatar.png" />
        </div>
        <div class="profile-info content-card">
          <h1
            class={`profile-info-name skeleton-block skeleton-block--half ${loadingClass} `}
          >
            {fullName}
            <img src="/underline.svg" class="profile-underline" />
          </h1>
          <p
            class={`page-paragraph page-paragraph--smoke skeleton-block skeleton-block--quarter loading ${loadingClass}`}
          ></p>
        </div>
      </div>
      {/* <pre>{JSON.stringify(profileData, null, 2)}</pre> */}
    </section>
  );
};

import './style.css'
export const ProfileHeader = ({ loading }) => {
  if (loading) return (
    <section id="profile-header">
      <div class="profile-header">
        <div class="profile-avatar">
          <img class="loading" src="" />
        </div>
        <div class="profile-info content-card">
          <h1
            class="
                  profile-info-name
                  skeleton-block skeleton-block--half
                  loading
                "
          >
            <img src="" class="profile-underline" />
          </h1>
          <p
            class="
                  page-paragraph page-paragraph--smoke
                  skeleton-block skeleton-block--quarter
                  loading
                "
          ></p>
        </div>
      </div>
    </section>
  );
  return (<div>Not loading</div>);
}

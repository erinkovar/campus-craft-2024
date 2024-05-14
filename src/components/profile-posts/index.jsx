import './style.css';

export const ProfilePosts = ({ loading, profileData }) => {
  if (loading) {
    return (
      <section id="profile-posts">
        <h2 class="page-heading-2">Pinned Posts</h2>
        <div class="profile-post-results">
          <div class="content-card fade-in">
            <div class="post-author">
              <div class="post-author-avatar loading"></div>
              <div class="post-author-info">
                <div class="skeleton-block skeleton-block--half loading"></div>
                <div class="skeleton-block skeleton-block--quarter loading"></div>
              </div>
            </div>
            <div class="post-content skeleton-block loading"></div>
          </div>
        </div>
      </section>
    );
  }

  const { pinnedPost } = profileData;
  return (
    <section id="profile-posts">
      <h2 class="page-heading-2">Pinned Posts</h2>
      <div class="profile-post-results">
        <div class="content-card fade-in">
          <div class="post-author">
            <div class="post-author-avatar loading"></div>
            <div class="post-author-info">
              <div class="skeleton-block skeleton-block--half loading"></div>
              <div class="skeleton-block skeleton-block--quarter loading"></div>
            </div>
          </div>
          <div class="post-content skeleton-block loading">
            {JSON.stringify(pinnedPost, null, 2)}
          </div>
        </div>
      </div>
    </section>
  );
};

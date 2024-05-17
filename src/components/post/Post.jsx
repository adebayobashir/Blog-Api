import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="images/post 1.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          His seven Premier League goals at Forest has already surpassed the
          four during his entire time at Chelsea
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        libero. Voluptatem praesentium quidem aperiam? Perspiciatis soluta neque
        rem. Dignissimos temporibus blanditiis adipisci vero pariatur animi
        placeat quas earum sint sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        libero. Voluptatem praesentium quidem aperiam? Perspiciatis soluta neque
        rem. Dignissimos temporibus blanditiis adipisci vero pariatur animi
        placeat quas earum sint sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        libero. Voluptatem praesentium quidem aperiam? Perspiciatis soluta neque
        rem. Dignissimos temporibus blanditiis adipisci vero pariatur animi
        placeat quas earum sint sunt!
      </p>
    </div>
  );
}

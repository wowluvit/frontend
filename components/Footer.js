import DeployFiles from "./DeployFiles";

export default function Footer() {
  return (
    <div>
      <div className="tabs w-screen justify-around">
        <a className="tab tab-lg tab-lifted">Topics</a>
        <a className="tab tab-lg tab-lifted tab-active">Feed</a>
        <a className="tab tab-lg tab-lifted">
          <label for="my-modal" class="btn">
            +
          </label>
        </a>

        <a className="tab tab-lg tab-lifted">Discover</a>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create new Post</h3>
          <p className="py-4">
            <form id="newPostForm">
              <input
                id="topCommment"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <DeployFiles></DeployFiles>
              <input
                id="topCommment"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </form>
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Create post
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

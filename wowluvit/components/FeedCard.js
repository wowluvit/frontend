export default function FeedCard() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl self-center mt-2.5">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    John Doe!
                    <div className="badge badge-secondary">Trending</div>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
}
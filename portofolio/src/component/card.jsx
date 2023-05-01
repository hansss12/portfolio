import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Card () {
const portfolio = useSelector((state) => {
    return state.counterReducer
})


return (
    <>
        <div className="grid grid-cols-3 bg-white pl-10 p-10">
                {portfolio.map((el, i) => {
                    return (
                        <Link to={`/detail/${el.id}`} key={i}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={el.image} alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {el.name}
                                        {el.name == "Netflix" ? (
                                            <div className="badge badge-success">
                                                Vue
                                            </div>
                                        ) : (
                                            <div className="badge badge-info">
                                                React
                                            </div>
                                        )}
                                    </h2>
                                    <p>{el.description}</p>
                                    <div className="card-actions justify-end">
                                        {el.usage.map((el, i) => {
                                            return (
                                                <div className="badge badge-outline">
                                                    {el.name}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                    </Link>
                    );
                })}
        </div>
    </>
);
}
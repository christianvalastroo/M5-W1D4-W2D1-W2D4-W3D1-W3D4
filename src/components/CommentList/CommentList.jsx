import SingleComment from "../SingleComment/SingleComment"
import "./CommentList.css"

const CommentsList = ({ comments, refreshComments }) => {
    return (
        <div className="comment-list">
            {/* Mostra ogni commento con il suo componente. */}
            {comments.map((c) => (
                <SingleComment key={c._id} comment={c} refreshComments={refreshComments} />
            ))}
        </div>
    )
}

export default CommentsList

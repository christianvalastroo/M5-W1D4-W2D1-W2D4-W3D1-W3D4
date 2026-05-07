import { useState } from "react"
import "./AddComment.css"

const AddComment = ({ asin, refreshComments }) => {
    // Salva i dati del form prima dell'invio.
    const [newComment, setNewComment] = useState({
        comment: "",
        // elementId deve corrispondere all'asin del libro selezionato.
        rate: 0,
        elementId: asin
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        // Invia il commento alle API di Strive School.
        fetch("https://striveschool-api.herokuapp.com/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ3ZWEyYzg5ODA5OTAwMTU1M2FlZWUiLCJpYXQiOjE3NzU3NTc4NzYsImV4cCI6MTc3Njk2NzQ3Nn0.WL9K39iwryMdnCmRKEEv7xT9vPsUHA0cv7j0LAo1MHg`
            },
            body: JSON.stringify(newComment)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Token non valido o scaduto")
                }
                return res.json()
            })
            .then((data) => {
                console.log("Commento salvato:", data)
                // Aggiorna la lista dopo il salvataggio.
                refreshComments()
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <form className="add-comment-form" onSubmit={handleSubmit}>
            <input className="add-comment-input"
                type="text"
                placeholder="Scrivi una recensione"
                value={newComment.comment}
                onChange={(e) =>
                    setNewComment({
                        ...newComment,
                        comment: e.target.value
                    })
                }
            />

            <div className="stars-wrapper">
                {[1, 2, 3, 4, 5].map((star) => (
                    // Aggiorna il voto quando clicco su una stella.
                    <span className="star"
                        key={star}
                        style={{
                            cursor: "pointer",
                            fontSize: "24px"
                        }}
                        onClick={() =>
                            setNewComment({
                                ...newComment,
                                rate: star
                            })
                        }
                    >
                        {star <= newComment.rate ? "⭐" : "☆"}
                    </span>
                ))}
            </div>

            <button className="add-comment-btn" type="submit">Invia</button>
        </form>
    )
}

export default AddComment

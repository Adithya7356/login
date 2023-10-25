import React, { useState } from 'react'

const Book = () => {


    const [form, setForm] = useState({
        name: '',
        details: "",
        genere: "",
        author: "",
        price: "",
    })
    const handleChange = e => {
        const formChange = {
            ...form, [e.target.name]: e.target.value
        }
        setForm(formChange)
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log(form)
    }

    return (
        <div>
            <form>
                <h1>BOOKDETAILS</h1>
                <div>
                    <label htmlFor="book name"> bookname</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="book detail"> book details</label>
                    <input type="text" name="details" value={form.details} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="genere">genere</label>
                    <input type="text" name="genere" value={form.genere} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" value={form.author} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="price">price</label>
                    <input type="text" name="price" value={form.price} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>login</button>
            </form>
        </div>
    )
}

export default Book
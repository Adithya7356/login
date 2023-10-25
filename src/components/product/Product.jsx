import React, { useState } from 'react'

const Product = () => {


    const [form, setForm] = useState({
        name: '',
        details: "",
        quantity: "",
        brand: "",
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

    }

    return (
        <div>
            <form>
                <h1>Product Details</h1>
                <div>
                    <label htmlFor="product name">product name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="product detail">product details</label>
                    <input type="text" name="details" value={form.details} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="brand">brand</label>
                    <input type="text" name="brand" value={form.brand} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="quantity">quantity</label>
                    <input type="text" name="quantity" value={form.quantity} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="price">price</label>
                    <input type="text" name="price" value={form.price} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Product
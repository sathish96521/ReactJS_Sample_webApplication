function ProductCategoryRow({ category }) {
    return (
        <>
            <h6>ProductCategoryRow</h6>
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        </>
    )
}
export default ProductCategoryRow;
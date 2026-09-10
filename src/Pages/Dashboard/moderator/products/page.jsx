import ModeratorProductsTable from "../../../../Components/Templates/Dashboard/templates/moderator/products/ModeratorProductsTable";
import PageLabel from "../../../../Components/Templates/Dashboard/ui/PageLabel";


function ModeratorProducts() {
    return (
        <div className="space-y-10">
            <PageLabel label="مدیریت محصولات وبسایت" />
            <ModeratorProductsTable />
        </div>
    )
}

export default ModeratorProducts;
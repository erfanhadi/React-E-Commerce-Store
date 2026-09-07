import NavItem from "../../Components/Common/Sidebar/fragments/NavItem/index"

function ModeratorLinks() {
    return <>
            <NavItem href="/dashboard/moderator/home" label="پیشخوان" />
            <NavItem href="/dashboard/moderator/products" label="محصولات" />
            <NavItem href="/dashboard/moderator/orders" label="سفارش ها" />
            <NavItem href="/dashboard/moderator/tickets" label="تیکت ها" />
            <NavItem href="/dashboard/moderator/sellers" label="فروشنده ها" />
            <NavItem href="/dashboard/moderator/offs" label="تخفیف ها" />
    </>
}

export default ModeratorLinks
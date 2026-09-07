import { BiDollar, BiHome } from "react-icons/bi"
import NavItem from "../../Common/Sidebar/fragments/NavItem/index"
import { BsBox2, BsShop } from "react-icons/bs"
import { FaTruckArrowRight, FaUser } from "react-icons/fa6"

function ModeratorLinks() {
    return <>
        <NavItem
            bgColor="bg-zinc-500"
            iconColor="text-zinc-500"
            icon={<BiHome />}
            href="/dashboard/moderator/home"
            label="پیشخوان"
        />
        <NavItem
            bgColor="bg-yellow-500"
            iconColor="text-yellow-500"
            icon={<BsBox2 />}
            href="/dashboard/moderator/products"
            label="محصولات"
        />
        <NavItem
            bgColor="bg-orange-500"
            iconColor="text-orange-500"
            icon={<FaTruckArrowRight />}
            href="/dashboard/moderator/orders"
            label="سفارش ها"
        />
        <NavItem
            bgColor="bg-blue-500"
            iconColor="text-blue-500"
            icon={<FaUser />}
            href="/dashboard/moderator/tickets"
            label="کاربران"
        />
        <NavItem
            bgColor="bg-green-500"
            iconColor="text-green-500"
            icon={<BsShop />}
            href="/dashboard/moderator/sellers"
            label="فروشنده ها"
        />
        <NavItem
            bgColor="bg-purple-500"
            iconColor="text-purple-500"
            icon={<BiDollar />}
            href="/dashboard/moderator/offs"
            label="تخفیف ها"
        />
    </>
}

export default ModeratorLinks
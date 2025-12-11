import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_headerFooterLayout/_widthLimiterLayout')({
    component: LayoutComponent,
})

function LayoutComponent() {
    return (
        <div className="bg-main-background mt-12 mb-10 p-10 pt-6 w-full h-full rounded-3xl max-w-[170vh]">
            <Outlet />
        </div>
    )
}
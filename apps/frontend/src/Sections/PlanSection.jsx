
import PlanCard from "../Cards/PlanCard"

export default function PlanSection() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center">
                <h4 className="mb-2 font-semibold text-3xl">Pricing</h4>
                <h3 className="font-semibold text-2xl">Pricing plans for teams of all sizes</h3>
                <span className="">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum</span>
            </div>
            <div className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-3">
                <PlanCard
                    name="Freelancer"
                    description="The essentials to provide your best work for clients."
                    btnText="Buy"
                    price="15"
                    features={["1 User", "2 Project", "5GB Storage"]}
                    color=""
                >
                </PlanCard>
                <PlanCard
                    name="Startup"
                    description="A plan that scales with your rapidly growing business."
                    btnText="Buy"
                    price="30"
                    features={["1 User", "2 Project", "5GB Storage"]}
                    color="Start Free Plan"
                >
                </PlanCard>
                <PlanCard
                    name="Enterprise"
                    description="Dedicated support and infrastructure for your company"
                    btnText="Buy"
                    price="48"
                    features={["1 User", "2 Project", "5GB Storage"]}
                    color="Start Free Plan"
                >
                </PlanCard>

            </div>

        </div>
    )
}
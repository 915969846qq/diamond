import Birds_nest from "@/components/Birds_nest.vue";
import appointment from "@/components/Team/appointment.vue";
import order from "@/components/Team/order.vue";
import integral from "@/components/Team/integral.vue";
import certificate from "@/components/Team/certificate.vue";
import gift from "@/components/Team/gift.vue";
import evaluate from "@/components/Team/evaluate.vue";
import Viceorder from "@/components/Team/Viceorder.vue";
export default [
  {
    path: "/Birds_nest",
    name: "Birds_nest",
    component: Birds_nest,
    children: [
      {
        path: "/Birds_nest/appointment",
        name: "appointment",
        component: appointment
      },
      {
        path: "/Birds_nest/order",
        name: "order",
        component: order
      },
      {
        path: "/Birds_nest/integral",
        name: "integral",
        component: integral
      },
      {
        path: "/Birds_nest/certificate",
        name: "certificate",
        component: certificate
      },
      {
        path: "/Birds_nest/gift",
        name: "gift",
        component: gift
      },
      {
        path: "/Birds_nest/evaluate",
        name: "evaluate",
        component: evaluate
      },
      {
        path: "/Birds_nest/Viceorder",
        name: "Viceorder",
        component: Viceorder
      }
    ]
  }
];

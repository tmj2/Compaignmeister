import { NextPage } from "next";
import { Hero, Campaign, Optimisation, ThreeSteps, Subscribe } from "sections";

const campaignProps = {
  cards: [
    {
      id: 1,
      title: "Smart Campaigns",
      content:
        "Easily set up outcome-driven campaigns with clear goals and objectives. Measure all experiments flawlessly with our unique tactic IDs.",
      image: {
        src: "/imgs/icon-1.webp",
        alt: "Smart Campaigns icon",
        width: 89,
        height: 80
      }
    },
    {
      id: 2,
      title: "Smart Data",
      content:
        "Integrate all datasources, ensure data quality and predict campaign performance with your historic data.",
      image: { src: "/imgs/icon-2.webp", alt: "Smart Data icon", width: 89, height: 80 }
    },
    {
      id: 3,
      title: "Smart Optimisation",
      content:
        "Combine predictive analytics, real-time scorecards and validated experiments to improve your campaigns with over 25%.",
      image: {
        src: "/imgs/icon-3.webp",
        alt: "Smart Optimisation icon",
        width: 89,
        height: 80
      }
    },
    {
      id: 4,
      title: "Full Funnel",
      content:
        "Manage all your campaigns across all channels - offline & online - spanning the full customer journey.",
      image: {
        src: "/imgs/icon-5.webp",
        alt: "Smart Campaigns icon",
        width: 89,
        height: 80
      }
    },
    {
      id: 5,
      title: "Campaign Governance",
      content:
        "Maintain clear definitions of dimensions and metrics, ensure naming conventions and keep track of all changes in your campaigns.",
      image: {
        src: "/imgs/icon-6.webp",
        alt: "Smart Data icon",
        width: 89,
        height: 80
      }
    },
    {
      id: 6,
      title: "Work Together",
      content:
        "Collaborate with all your agencies across all campaigns, brands and countries in one tool replacing hundreds of Excel sheets.",
      image: {
        src: "/imgs/icon-7.webp",
        alt: "Smart Optimisation icon",
        width: 89,
        height: 80
      }
    }
  ]
};
const stepsProps = {
  steps: [
    {
      id: 1,
      title: "Organise",
      subtitle:
        "Start with outcomes-driven optimisation in a matter of minutes with our Smart Campaigns",
      content:
        "Create Smart Campaigns with clear goals, objectives and tactics. Import your historic data to predict campaign performance immediately.",
      image: {
        src: "/imgs/card-img-1.webp",
        alt: "Smart Campaigns icon",
        width: 306,
        height: 228
      }
    },
    {
      id: 2,
      title: "Analyse",
      subtitle: "Compare actual performance with your targets for each tactic in real time",
      content:
        "We combine all relevant data sources and ensure data quality through automated tests. Be informed upfront to any trend change by using our automated anomaly detection.",
      image: { src: "/imgs/card-img-2.webp", alt: "Smart Data icon", width: 306, height: 228 }
    },
    {
      id: 3,
      title: "Optimise",
      subtitle: "Improve your campaign performance through actionable Smart Insights",
      content:
        "Use our Smart Optimisation Engine to improve your ROI before, during and after your campaign runtime. Combine attribution, experimantation and marketing mix modeling for better performance.",
      image: {
        src: "/imgs/card-img-3.webp",
        alt: "Smart Optimisation icon",
        width: 306,
        height: 228
      }
    }
  ]
};
const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Optimisation />
      <Campaign {...campaignProps} />
      <ThreeSteps {...stepsProps} />
      <Subscribe />
    </main>
  );
};

export default Home;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Events from "@/components/Events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Acdemy",
  description: "Photos and highlights from our academy events — showcases, workshops, and community programs.",
};

const EventsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Events & Celebrations"
        description="Photos and highlights from our academy events — showcases, workshops, and community programs."
      />
      <Events />
    </>
  );
};

export default EventsPage;

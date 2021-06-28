import React, { useState } from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import SpineChart from "../components/SpineChart";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import UserPic from "../assets/userPic.png";
import { Link } from "react-router-dom";
import { Nav, Button as ButtonBoot } from "react-bootstrap";
import InputBox from "../components/Inputbox";
import Button from "../components/Button";

const MessagePanelRow = () => {
  return (
    <Nav.Link
      to="/dashboard/messages"
      as={Link}
      className="message__panel__small__row"
    >
      <div className="message__panel__samll__content">
        <img
          src={UserPic}
          alt="user-pic"
          className="message__panel__small__row__img"
        />
        <div className="messenger__name" style={{ fontWeight: "800" }}>
          Francesca Metts
        </div>
      </div>
      <div className="messenger__name">3 Days Ago</div>
    </Nav.Link>
  );
};

function StatsCard({ isData, data, heading, infoContent }) {
  return (
    <Card heading={heading} infoContent={infoContent}>
      {isData ? (
        <div className="panel__card__content__statistics">{data}</div>
      ) : (
        <div className="panel__card__content__statistics__null">
          Nothing Here
        </div>
      )}
    </Card>
  );
}

function Bot() {
  const [isBotOpen, setIsBotOpen] = useState(true);
  return (
    <div className="bot__panel">
      <div className="bot__panel__cta">
        {isBotOpen ? (
          <ButtonBoot
            className="bot__panel__cta__primary"
            onClick={() => {
              setIsBotOpen(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#009A8E"
                d="M512,256c0,141.385-114.615,256-256,256S0,397.385,0,256S114.615,0,256,0S512,114.615,512,256z"
              />
              <path
                fill="#FFC143"
                d="M512,30v30c0,16.568-13.431,30-30,30H369.807c-4.22,16.445-14.266,30.552-27.807,40
	c-13.541-9.448-23.587-23.555-27.807-40H292c-16.569,0-30-13.432-30-30V30c0-16.568,13.431-30,30-30h190
	C498.569,0,512,13.432,512,30z"
              />
              <path
                fill="#FFb509"
                d="M313.75,90H292c-16.569,0-30-13.432-30-30V30c0-16.568,13.431-30,30-30h21.75
	c-16.569,0-30,13.432-30,30v30C283.75,76.568,297.181,90,313.75,90z"
              />
              <path
                fill="#FF9500"
                d="M462,24.5v11c0,1.104-0.896,2-2,2H294c-1.104,0-2-0.896-2-2v-11c0-1.104,0.896-2,2-2h166
	C461.104,22.5,462,23.396,462,24.5z M358,52.5h-64c-1.104,0-2,0.896-2,2v11c0,1.104,0.896,2,2,2h64c1.104,0,2-0.896,2-2v-11
	C360,53.396,359.104,52.5,358,52.5z M401.25,52.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5
	S405.392,52.5,401.25,52.5z M377.5,52.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5S381.642,52.5,377.5,52.5z
	 M425,52.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5S429.142,52.5,425,52.5z"
              />
              <path
                fill="#D9E7EC"
                d="M471,266.041v17.918c0,13.3-4.409,26.232-12.557,36.744c-19.134,24.684-42.684,45.772-69.463,62.085
	c-7.04,44.021-26.05,84.045-53.581,116.641C310.4,507.577,283.719,512,256,512s-54.4-4.423-79.399-12.572
	c-27.531-32.595-46.541-72.619-53.581-116.641c-26.779-16.312-50.329-37.401-69.463-62.085C45.409,310.191,41,297.259,41,283.959
	v-17.918c0-13.3,4.409-26.232,12.557-36.744C98.481,171.344,167.735,133.206,246,130.199V92.125
	c-7.264-3.663-12.25-11.185-12.25-19.875C233.75,59.962,243.712,50,256,50s22.25,9.962,22.25,22.25
	c0,8.69-4.986,16.212-12.25,19.875v38.074c78.265,3.007,147.519,41.146,192.443,99.099C466.591,239.809,471,252.741,471,266.041z"
              />
              <path
                fill="#C5D3DD"
                d="M256,417c48.91,0,94.614-13.717,133.478-37.514c-1.322,9.059-3.149,17.953-5.45,26.655
	c-37.057,23.402-80.96,36.946-128.028,36.946c-24.627,0-48.384-3.715-70.75-10.606c-7.566-2.331-14.793,4.542-12.662,12.167
	c5.938,21.251,13.715,41.415,23.098,60.186c-6.461-1.561-12.825-3.366-19.085-5.406c-27.531-32.595-46.523-72.624-53.562-116.645
	c-26.784-16.312-50.344-37.393-69.482-62.081C45.409,310.191,41,297.259,41,283.959v-17.918c0-13.3,4.409-26.232,12.557-36.744
	c34.98-45.125,84.712-78.238,141.963-92.106c-45.015,17.957-84.035,49.062-112.963,88.955C74.409,237.382,70,251.206,70,265.423
	v19.154c0,14.217,4.409,28.041,12.557,39.277c24.97,34.434,57.463,62.312,94.835,80.847C202.161,412.686,228.576,417,256,417z
	 M330.5,310c35.898,0,65-29.102,65-65s-29.102-65-65-65s-65,29.102-65,65S294.602,310,330.5,310z M116.5,245
	c0,35.898,29.102,65,65,65s65-29.102,65-65s-29.102-65-65-65S116.5,209.102,116.5,245z"
              />
              <path
                fill="#9FACBA"
                d="M286,345c0,14.019-13.178,25-30,25s-30-10.981-30-25c0-5.522,4.477-10,10-10s10,4.478,10,10
	c0,1.763,3.796,5,10,5c6.203,0,10-3.237,10-5c0-5.522,4.478-10,10-10S286,339.478,286,345z"
              />
              <path
                fill="#174550"
                d="M385.5,245c0,30.375-24.624,55-55,55s-55-24.625-55-55c0-5.203,0.738-10.229,2.088-15h-43.176
	c1.35,4.771,2.088,9.797,2.088,15c0,30.375-24.624,55-55,55s-55-24.625-55-55s24.624-55,55-55c19.304,0,36.274,9.954,46.088,25
	h56.823c9.814-15.046,26.784-25,46.088-25C360.876,190,385.5,214.625,385.5,245z"
              />
              <path
                fill="#8BEBDB"
                d="M221.5,245c0,22.091-17.909,40-40,40s-40-17.909-40-40s17.909-40,40-40S221.5,222.909,221.5,245z
	 M330.5,205c-22.091,0-40,17.909-40,40s17.909,40,40,40s40-17.909,40-40S352.591,205,330.5,205z"
              />
              <path
                fill="#5EE2C5"
                d="M221.5,245c0,20.206-14.985,36.903-34.446,39.607c9.588-9.094,15.78-23.448,15.78-39.607
	s-6.192-30.514-15.78-39.607C206.515,208.097,221.5,224.794,221.5,245z M336.054,205.393c9.588,9.094,15.78,23.448,15.78,39.607
	s-6.192,30.514-15.78,39.607C355.515,281.903,370.5,265.206,370.5,245S355.515,208.097,336.054,205.393z"
              />
            </svg>
          </ButtonBoot>
        ) : (
          <ButtonBoot
            className="bot__panel__cta__primary"
            onClick={() => {
              setIsBotOpen(false);
            }}
          >
            <svg viewBox="0 -11 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m501 245c0 135.308594-109.691406 245-245 245s-245-109.691406-245-245 109.691406-245 245-245 245 109.691406 245 245zm0 0"
                fill="#30d6ce"
              />
              <path
                d="m482 170c0 5.523438-4.476562 10-10 10s-10-4.476562-10-10c0-82.710938-67.289062-150-150-150h-112c-82.710938 0-150 67.289062-150 150 0 5.523438-4.476562 10-10 10s-10-4.476562-10-10c0-93.738281 76.261719-170 170-170h112c93.738281 0 170 76.261719 170 170zm0 0"
                fill="#025f80"
              />
              <path
                d="m512 147.75v40c0 16.566406-13.429688 30-30 30h-12c0 4.992188-4.476562 9.042969-10 9.042969s-10-4.050781-10-9.042969h-18c-5.523438 0-10-4.476562-10-10v-80c0-5.523438 4.476562-10 10-10h14.902344l-3.261719-8.964844c-2.832031-7.785156 1.179687-16.394531 8.964844-19.226562 7.785156-2.832032 16.390625 1.179687 19.226562 8.964844l6.996094 19.226562h3.171875c16.570312 0 30 13.433594 30 30zm-432-30h-14.902344l3.261719-8.964844c2.832031-7.785156-1.179687-16.394531-8.964844-19.226562-7.785156-2.832032-16.390625 1.179687-19.226562 8.964844l-6.996094 19.226562h-3.171875c-16.570312 0-30 13.433594-30 30v40c0 16.566406 13.429688 30 30 30h50c5.523438 0 10-4.476562 10-10v-80c0-5.523438-4.476562-10-10-10zm0 0"
                fill="#ff6466"
              />
              <path
                d="m482 147.75v40c0 16.566406-13.429688 30-30 30h-20c-5.523438 0-10-4.476562-10-10v-80c0-5.523438 4.476562-10 10-10h20c16.570312 0 30 13.433594 30 30zm-452 40v-40c0-12.386719 7.511719-23.015625 18.226562-27.59375.464844-.195312.773438-.644531.773438-1.148438 0-.695312-.5625-1.257812-1.253906-1.257812h-17.746094c-16.570312 0-30 13.433594-30 30v40c0 16.570312 13.429688 30 30 30h30c-16.570312 0-30-13.433594-30-30zm0 0"
                fill="#ff393a"
              />
              <path
                d="m286 328.75c0 22.089844-13.429688 40-30 40s-30-17.910156-30-40 13.429688-40 30-40 30 17.910156 30 40zm0 0"
                fill="#0069a3"
              />
              <path
                d="m286 328.75c0 16.402344-7.40625 30.488281-18 36.660156-10.59375-6.171875-18-20.257812-18-36.660156s7.40625-30.488281 18-36.660156c10.59375 6.171875 18 20.257812 18 36.660156zm0 0"
                fill="#08c"
              />
              <path
                d="m447 173.75c0 77.320312-62.679688 140-140 140h-102c-77.320312 0-140-62.679688-140-140s62.679688-140 140-140h102c77.320312 0 140 62.679688 140 140zm-135 160h-112c-54.480469 0-101.683594 31.121094-124.820312 76.558594 44.796874 48.96875 109.21875 79.691406 180.820312 79.691406s136.023438-30.722656 180.820312-79.691406c-23.136718-45.4375-70.339843-76.558594-124.820312-76.558594zm0 0"
                fill="#97f0f2"
              />
              <path
                d="m307 313.75h-63.019531c-77.320313 0-140-62.679688-140-140s62.679687-140 140-140h63.019531c77.320312 0 140 62.679688 140 140s-62.679688 140-140 140zm-51 176.25c71.601562 0 136.023438-30.722656 180.820312-79.691406-23.136718-45.4375-70.339843-76.558594-124.820312-76.558594h-72c-64.859375 0-119.402344 44.105469-135.300781 103.960938 41.65625 32.753906 94.199219 52.289062 151.300781 52.289062zm0 0"
                fill="#c0fbff"
              />
              <path
                d="m346 444c0 10.910156-1.945312 21.359375-5.503906 31.035156-26.339844 9.679688-54.800782 13.964844-84.496094 13.964844s-58.15625-4.285156-84.496094-13.964844c-3.558594-9.675781-5.503906-20.125-5.503906-31.035156 0-49.707031 40.292969-90 90-90s90 40.292969 90 90zm0 0"
                fill="#08c"
              />
              <path
                d="m322 258.75h-132c-38.660156 0-70-31.339844-70-70v-30c0-38.660156 31.339844-70 70-70h132c38.660156 0 70 31.339844 70 70v30c0 38.660156-31.339844 70-70 70zm-96.984375 207.882812c-21.070313-4.699218-36.421875-23.148437-36.515625-44.738281 0-.132812 0-.261719 0-.394531 0-19.105469 5.957031-36.816406 16.109375-51.390625-23.335937 16.261719-38.609375 43.289063-38.609375 73.890625 0 10.910156 1.945312 21.359375 5.503906 31.035156 26.339844 9.679688 54.800782 14.964844 84.496094 14.964844 29.6875 0 58.136719-5.28125 84.46875-14.953125 1.355469-3.691406 2.5-7.484375 3.371094-11.386719-20.804688 5.75-42.707032 8.839844-65.339844 8.839844-18.371094 0-36.269531-2.027344-53.484375-5.867188zm0 0"
                fill="#006cbc"
              />
              <path
                d="m322 258.75h-102c-38.660156 0-70-31.339844-70-70v-30c0-38.660156 31.339844-70 70-70h102c38.660156 0 70 31.339844 70 70v30c0 38.660156-31.339844 70-70 70zm0 0"
                fill="#08c"
              />
              <path
                d="m284.285156 201.929688c3.90625 3.90625 3.90625 10.234374 0 14.140624-15.597656 15.597657-40.972656 15.597657-56.570312 0-3.902344-3.902343-3.902344-10.234374 0-14.140624 3.90625-3.90625 10.238281-3.90625 14.144531 0 7.796875 7.796874 20.484375 7.796874 28.285156 0 1.953125-1.953126 4.511719-2.929688 7.070313-2.929688s5.117187.976562 7.070312 2.929688zm-58.105468-61.234376c-15.597657-15.59375-40.976563-15.59375-56.570313 0-3.90625 3.90625-3.90625 10.238282 0 14.144532 3.90625 3.902344 10.238281 3.902344 14.144531 0 7.796875-7.800782 20.484375-7.800782 28.28125 0 1.953125 1.953125 4.511719 2.929687 7.070313 2.929687 2.558593 0 5.121093-.976562 7.074219-2.929687 3.902343-3.90625 3.902343-10.238282 0-14.144532zm116.210937 0c-15.597656-15.59375-40.972656-15.59375-56.570313 0-3.902343 3.90625-3.902343 10.238282 0 14.144532 3.90625 3.902344 10.238282 3.902344 14.144532 0 7.796875-7.800782 20.484375-7.800782 28.285156 0 1.953125 1.953125 4.511719 2.929687 7.070312 2.929687 2.558594 0 5.117188-.976562 7.070313-2.929687 3.90625-3.90625 3.90625-10.238282 0-14.144532zm0 0"
                fill="#30d6ce"
              />
              <path
                d="m271 437v52.546875c-4.964844.300781-9.960938.453125-15 .453125s-10.035156-.152344-15-.453125v-52.546875c0-8.285156 6.714844-15 15-15s15 6.714844 15 15zm0 0"
                fill="#84deea"
              />
              <path
                d="m271 437v22c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-22c0-8.285156 6.714844-15 15-15s15 6.714844 15 15zm-15-27c9.941406 0 18-8.058594 18-18s-8.058594-18-18-18-18 8.058594-18 18 8.058594 18 18 18zm0 0"
                fill="#fff5f5"
              />
              <path
                d="m470 217.75v20c0 22.054688-17.945312 40-40 40h-170v-20h170c11.027344 0 20-8.972656 20-20v-20zm0 0"
                fill="#025f80"
              />
              <path
                d="m288.945312 283.109375h-65.890624c-9.417969 0-17.054688-7.636719-17.054688-17.054687 0-9.417969 7.636719-17.054688 17.054688-17.054688h65.890624c9.417969 0 17.054688 7.636719 17.054688 17.054688 0 9.421874-7.636719 17.054687-17.054688 17.054687zm0 0"
                fill="#ff6466"
              />
              <path
                d="m288.945312 283.109375h-35.890624c-9.417969 0-17.054688-7.636719-17.054688-17.054687 0-9.417969 7.636719-17.054688 17.054688-17.054688h35.890624c9.417969 0 17.054688 7.636719 17.054688 17.054688 0 9.421874-7.636719 17.054687-17.054688 17.054687zm0 0"
                fill="#ff895a"
              />
            </svg>
          </ButtonBoot>
        )}
      </div>
      {isBotOpen ? (
        <div className="bot__panel__content">
          <InputBox placeholder="Search here" className="input__box" />
          <Button placeholder="Search" variant="btn" />
        </div>
      ) : null}
    </div>
  );
}
export default class DashboardPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer__empty">
        <Bot />
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Placed to Prepared:"
            headingTimeStamp="0 days, 9 Hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="9"
          />
          <Card
            heading=" Prepared To Merchant Departure:"
            headingTimeStamp=" 1 day, 13 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="37 hours"
          />
          <Card
            heading="Merchant Departure to USA Consolidation:"
            headingTimeStamp=" 1 day, 13 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="59 hours"
          />
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="USA Consolidation Arrival To Departure: "
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="59 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
          <Card
            heading="USA Consolidation Arrival To Departure:"
            headingTimeStamp="2 days, 11 hours"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="54 hours"
          />
          <div style={{ opacity: 0, width: "33%" }}></div>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Note"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
          >
            <div className="panel__card__content__notes">
              DB item:
              <span>#OI-23434</span>
            </div>
            <div className="panel__card__content__notes">
              Issue:
              <span>#3434935</span>
            </div>
            <div className="panel__card__content__notes">
              Delay in order:
              <span>
                2 days Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Atque id veniam delectus fugit aliquam quis impedit sapiente
                quas consequatur eligendi cum facere est sit eveniet adipisci
                corrupti consequuntur, velit repellendus?
              </span>
            </div>
            <div className="panel__card__content__notes">
              Amount / Method:
              <span>
                $50 / Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore adipisci possimus consequatur corrupti, mollitia illo
                voluptas. Laborum quaerat natus dolorem.
              </span>
            </div>
            <div className="panel__card__content__notes">
              DB item:
              <a href="https://www.google.com/">https://www.google.com/</a>
            </div>
            <div className="panel__card__content__notes">
              CC:
              <span>lorem ipsm</span>
            </div>
          </Card>
          <div className="panel__conatainer__empty__row__col">
            <div className="panel__conatainer__empty__row">
              <StatsCard
                isData={true}
                data="Priority"
                heading="Tickets"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
              />
              <StatsCard
                isData={false}
                heading="Unpaired Items"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data="Unpaired Items"
              />
              <StatsCard
                isData={true}
                heading="Preparation API"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data={
                  <>
                    <div>
                      <span style={{ fontWeight: "bold" }}>87.1% </span>orders
                      are prepared in last 24 hours
                    </div>
                    <div>Average hours: 11.74</div>
                  </>
                }
              />
            </div>
            <div className="panel__conatainer__empty__row">
              <StatsCard
                isData={false}
                heading="Damaged"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data="lorem"
              />
              <StatsCard
                isData={true}
                heading="Processing Items"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data="187 items to approve"
              />
              <StatsCard
                isData={true}
                heading="Manual Processing Required"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data={
                  <a href="https://www.google.com/">
                    187 orders need manualordering
                  </a>
                }
              />
            </div>
            <div className="panel__conatainer__empty__row">
              <StatsCard
                isData={false}
                heading="Unshipped Orders"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data="lorem"
              />
              <StatsCard
                isData={false}
                heading="Delayed Courier Deliveries"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data="187 items to approve"
              />
              <StatsCard
                isData={true}
                heading="Requires Matching"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data={
                  <a href="https://www.google.com/">1298 requires matching</a>
                }
              />
            </div>
            <div className="panel__conatainer__empty__row">
              <StatsCard
                isData={true}
                heading="Cancelled Orders By Seller"
                infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
                data="187 items to approve"
              />
              <div style={{ opacity: 0, width: "33%" }}></div>
              <div style={{ opacity: 0, width: "33%" }}></div>
            </div>
          </div>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <LineChart />
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <SpineChart />
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,345"
            contentInfo="25 April 2019"
          >
            <BarChart />
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <DoughnutChart />
          </Card>
        </div>
      </div>
    );
  }
}

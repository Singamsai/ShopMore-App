import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <br />
      <br />
      <h3 style={{ color: "red" }}>
        To Shop Something excited Click on{" "}
        <b
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/product");
          }}
        >
          Products
        </b>
      </h3>
      <p style={{ padding: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit culpa
        cupiditate natus possimus velit et nulla fugiat, officia nihil vero quia
        repellat, accusamus esse quasi temporibus dolore exercitationem quae
        ullam laudantium necessitatibus. Commodi totam molestiae cupiditate!
        Quae quo enim suscipit mollitia aut consectetur corrupti quidem, alias
        odit aspernatur beatae exercitationem perferendis temporibus repellat
        iure a necessitatibus vero. Aliquam id accusantium voluptates. Nobis
        molestiae dolore est ut iusto voluptas nulla inventore blanditiis
        impedit officia, commodi nam? Nulla suscipit blanditiis maiores
        cupiditate eligendi id numquam pariatur accusamus quod ut tempora
        corporis, enim laudantium deleniti saepe tempore odio perspiciatis
        possimus ea! Numquam, quasi odit harum dicta tempora sunt unde corrupti,
        fugit cumque, placeat nihil fuga debitis deleniti laboriosam excepturi
        at minus recusandae pariatur iste ratione. Omnis assumenda praesentium
        placeat eos magni possimus distinctio voluptatibus quo eaque dolores
        fugit voluptatem nemo accusamus quibusdam, dignissimos, id sapiente
        deserunt repellat maxime reprehenderit neque? Delectus temporibus labore
        ea libero adipisci nam quisquam. Quisquam tempore excepturi amet et
        quaerat. Rerum nam quibusdam soluta quis blanditiis et assumenda
        dignissimos veritatis eos, corporis, ut harum velit! Doloremque corporis
        asperiores, repellat numquam odit expedita aut deserunt officia deleniti
        ullam molestias saepe quas impedit ipsa minus voluptas qui, vel
        excepturi accusamus voluptatibus harum consequuntur. Soluta, in, aperiam
        iure asperiores explicabo culpa sint ad ut odit ipsum vitae aspernatur
        iste labore quam inventore voluptas maxime perspiciatis sit adipisci
        unde ducimus! Deserunt magnam quos quam reprehenderit consequuntur unde
        aliquam, voluptas sequi placeat adipisci eum tenetur blanditiis ratione
        doloremque, dicta aut. Atque facere tempore error, ratione eos voluptate
        ullam saepe nobis obcaecati ut, reiciendis numquam. Labore obcaecati
        earum recusandae, illum voluptas nesciunt harum repudiandae accusantium!
        Dolores nostrum beatae consequatur possimus officiis nulla culpa ratione
        ipsum, iste totam non suscipit? Nihil eum facere ducimus at? Adipisci,
        voluptate dicta et vitae nihil incidunt non id sapiente.
      </p>
    </>
  );
}

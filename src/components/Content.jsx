import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Content () {
    const { darkMode, toggleDarkMode } = useContext(AppContext);

    return (
        <div className="mode">

            <div>
                <button
                    onClick={() => toggleDarkMode()}
                    className={darkMode ? 'btn-lightmode' : 'btn-darkmode'}>
                    {darkMode ? 'mode clair' : 'mode sombre'}
                </button>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id facere minus libero veritatis corrupti quaerat corporis iusto, optio delectus, adipisci exercitationem rem, enim doloremque omnis impedit ducimus illum quos. Minima quia sunt corrupti, quasi alias, suscipit natus eaque maxime ea quod omnis doloribus numquam. Odio assumenda maxime, dolorum illo voluptatum molestias atque error sunt ea tenetur eaque officiis id voluptas blanditiis similique reiciendis! Quae, quis laboriosam officiis omnis saepe, assumenda sed eaque maxime vitae aspernatur deleniti quod itaque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui illo, recusandae maiores consequuntur officiis ut quisquam veritatis cupiditate quis odit molestias minima id corporis ipsam maxime consectetur sed obcaecati modi voluptatibus dolore ipsa consequatur impedit a! Ad repellat earum sequi aliquam possimus placeat est amet libero aliquid, maxime modi tempora aperiam eius! Consequatur quidem harum asperiores deleniti dignissimos laborum omnis nostrum ad distinctio vero. Nesciunt consequuntur sapiente deserunt suscipit quam iusto expedita earum eligendi error, accusantium laboriosam? Neque eveniet cupiditate pariatur blanditiis. Nobis quos delectus modi sint? Atque corrupti excepturi cum nam iure quam vitae, adipisci aspernatur incidunt, omnis impedit laborum error harum dolor expedita, animi alias consequuntur vel soluta ad ullam facere iusto aliquid. Expedita sunt natus sint commodi! Dolore at eaque, iusto repellendus quibusdam obcaecati ducimus rem molestiae architecto rerum maxime. Minus similique tenetur error sed distinctio dolores accusantium. Similique rerum libero quasi officia, delectus animi itaque non, dolorem qui quidem suscipit praesentium modi atque ipsa dolore aliquam autem quibusdam. Autem saepe vitae magni molestias nulla, tempore nobis, vel quae repellendus voluptates harum nam et impedit necessitatibus. Cum omnis excepturi odio vitae delectus at repellendus, fuga voluptate cupiditate quibusdam quam culpa modi, sequi repudiandae temporibus autem nostrum unde. Illo, quaerat aliquam natus quibusdam veritatis nihil tempore fugit minus laborum voluptatum ut dolor necessitatibus dignissimos? Sequi minus perspiciatis accusamus aut ex est molestias esse. Nulla at excepturi dolorum totam, libero deleniti! Aspernatur saepe accusamus harum voluptatum alias labore libero illo, delectus dolorem expedita natus at eius deserunt temporibus. Corporis illum nemo veniam accusantium, nobis fugiat nesciunt similique eveniet rem impedit neque omnis excepturi nostrum ab et, aliquam repellendus laboriosam quisquam rerum sequi ducimus quas quasi aliquid inventore. Ut repudiandae beatae neque non dicta ratione quia et fuga blanditiis repellat quas, labore facere vero odio dolores perferendis enim aperiam consectetur sed minus error necessitatibus. Sequi facilis nostrum voluptates doloribus veritatis quia recusandae quidem voluptas neque ea ex nobis optio consequuntur ipsa iste fugit possimus, labore nemo eveniet soluta earum minus quisquam necessitatibus culpa? Alias nemo atque voluptatem a. Quod minus voluptatem, iusto qui voluptas porro ullam enim obcaecati nostrum ratione alias quaerat. Voluptate rem aliquam cum, omnis esse numquam autem eveniet reprehenderit rerum quisquam ipsum error asperiores cumque minus alias iure! Fugiat, debitis doloribus voluptas facilis ducimus libero itaque cumque vel labore fuga consequatur distinctio soluta eius commodi quas id quis praesentium saepe numquam dicta non dolorem rem? Et necessitatibus ab libero accusantium ducimus perferendis expedita autem quo temporibus inventore distinctio reiciendis, ullam id voluptatem. Consequatur, excepturi quaerat nihil porro perspiciatis voluptatem error consectetur. Asperiores repudiandae voluptates provident excepturi inventore quidem itaque eum blanditiis, quos eius suscipit voluptate impedit qui labore. Quisquam, ipsa tempore consectetur labore expedita magnam consequatur eaque autem doloremque necessitatibus iusto quia alias excepturi unde, quo dolorum sed, eveniet amet? Explicabo cum vitae corrupti consectetur maiores, id, labore debitis necessitatibus aspernatur eveniet nisi voluptas reprehenderit voluptate dignissimos odio nulla nam sed error unde vero corporis eos dicta. Optio officiis non in laudantium qui perspiciatis iusto quisquam.
            </p>
        </div>
    )
}


import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import React from "react";

const TermsAndConditions = () => {

    return <div className="our-team-container">
        <Header/>
        <Navbar/>
        <div className="conteiner">
            <p><strong className="title">Leader Auto Ship LLC Terms And Conditions.</strong></p>
            <ol>
                <li><strong> Introduction</strong></li>
            </ol>
            <p>This document contains and specifies the full Auto Transport Order Terms and Conditions of Use and
                Service &ldquo;Agreement&rdquo; of Leader Auto Ship LLC. Leader is licensed by the Department of
                Transportation (DOT) as an auto transport broker. Leader functions as an auto transportation
                broker &ldquo;Agent&rdquo; between Customer (including Customer&rsquo;s authorized agent), and
                Carrier.</p>
            <ol start="2">
                <li><strong> Definitions</strong></li>
            </ol>
            <ol>
                <li><strong>Leader Auto Ship:</strong>&nbsp;Leader Auto Ship LLC. (&ldquo;Leader&rdquo;) is a Ohio
                    corparation with its principal office or place of business at 979 oak forest Dr, Morrow Ohio 45152.
                    Leader refers to the corporation itself including all employees, directors, managers, agents,
                    officers, and staff of Leader Auto Ship LLC.
                </li>
                <li><strong>Carrier:</strong>&nbsp;Shall refer to contracted, third party trucking companies, and
                    individuals who own or operate a truck for the purpose of transporting Customer&rsquo;s vehicle, and
                    are properly registered with the U.S. DOT and carries proper insurance required by law.
                </li>
                <li><strong>Additional Services:&nbsp;</strong>means upgrades and additional services ordered by the
                    Customer such as vehicle top-loading, guaranteed pick up date, covered transport, additional
                    personal belongings, etc.
                </li>
                <li><strong>C.O.D.:&nbsp;</strong>means collect on delivery or payment on delivery.</li>
                <li><strong>Customer&rsquo;s Agent:&nbsp;</strong>means an individual over the age of 18 designated by
                    Customer to act on Customer&rsquo;s behalf or as an agent.
                </li>
                <li><strong>Point of Origin:</strong>&nbsp;means the Shipment pick up location designated by Customer or
                    as later modified by mutual agreement between Leader and Customer prior to transport.
                </li>
                <li><strong>Shipment:&nbsp;</strong>means the Customer&rsquo;s property &mdash; an automobile or
                    motorized vehicle &mdash; arranged for transportation in accordance with these TERMS.
                </li>
                <li><strong>Open Transport:</strong>&nbsp;Refers to all trucks that have an open trailer. Open trailers
                    are more susceptible to potential damages, and the price for an open carrier is less than an
                    Enclosed.
                </li>
                <li><strong>First Available Date (FAD):</strong>&nbsp;The first day a vehicle is available for pickup by
                    an auto transport carrier. In other words, it&rsquo;s the first day a customer can let the vehicle
                    go or be picked up by a carrier.
                </li>
                <li><strong>Pickup Window:</strong>&nbsp;The time period in a number of workdays that a carrier has
                    available to pick up a vehicle for shipment after the FAD.
                </li>
                <li><strong>Business Days:</strong>&nbsp;Shall mean Monday to Friday. It does NOT include weekends and
                    national holidays.
                </li>
                <li><strong>Order:</strong>&nbsp;Refers to a commitment of Customer to Leader to coordinate shipment of
                    Customer&rsquo;s vehicle subject to the terms of this Agreement.
                </li>
                <li><strong>Bill of Lading:</strong>&nbsp;Refers to document signed and dated by Customer and Carrier at
                    the time of pickup and delivery. Two (2) copies shall be signed at point of pickup, and two (2)
                    copies shall be signed at point of delivery. Each bill of lading shall be signed and dated both by
                    Carrier and Customer. The report of inspection of vehicle is listed on the bill of lading, including
                    but not limited to: scratches, damages, number of keys, make and model of car, date of pick-up, and
                    estimated date of delivery. It is the responsibility of Customer to make sure that a bill of lading
                    is filled out, and a proper inspection is done after delivery.
                </li>
                <li><strong>Personal Goods/Items:</strong>&nbsp;Refers to any and all additional items placed in or
                    attached to Customer&rsquo;s vehicle. It does NOT include necessary items required for regular day
                    to day use of vehicle such as jack, jumper cable, one spare tire, and alike.
                </li>
                <li><strong>Customized or Oversized Vehicle:</strong>&nbsp;Refers to vehicles longer than 16 feet,
                    vehicles with a camper or racks, vehicles that are altered, raised or redesigned in a manner that
                    substantially changes vehicle in terms of size, look, or shape compared to a normal/stock vehicle of
                    that type.
                </li>
                <li><strong>Inoperable Vehicle:</strong>&nbsp;Refers to vehicles that either require repair to make it
                    operable, or need extra effort when loading and unloading to and from Carrier&rsquo;s truck.
                </li>
                <li><strong>Customer:</strong>&nbsp;Refers to anyone using Leader&rsquo;s services in any manner. This
                    includes Customer&rsquo;s agents directly or indirectly appointed, and assignees authorized to
                    function on behalf of Customer either by law or other regulatory authorities.
                </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="3">
                <li><strong> Services</strong></li>
            </ol>
            <ol>
                <li><strong>Shipment Categories.</strong>&nbsp;Leader mainly offers two types of service for shipping
                    vehicles. The services are the Economy Saver Rate (ESR) and Guaranteed First Class Rate
                    (FCR).&nbsp;Below are detailed explanations of each category.<br/></li>
                <ol>
                    <li><strong>Saver Rate.</strong>&nbsp;Economy Saver Rate (ESR): ESR is a SAVINGS shipping option
                        where Leader will make every possible effort to find a Carrier to ship vehicle at the estimated
                        rate approximately but not guaranteed within seven (7) full work days after the FAD for pickup.
                        However, Customer understands and agrees that this option is a discounted rate whereby Leader
                        negotiates with carriers to accept vehicles. Chances of acceptance by carriers at this rate may
                        range from 5% to 30% depending on any number of factors such as prevailing economic conditions
                        and the time of the year. Usually, Leader&rsquo;s initial quotes fall into this category and if
                        a customer wants to upgrade, a responsible agent needs to be notified to give a guaranteed rate.
                    </li>
                </ol>
                <li>Leader will incrementally increase the price if no carrier show interest for lower price, but
                    customer may accept or decline offers of the carriers for higher prices. It is important to note
                    that timelines specified are NOT absolute, and are subject to normal weather conditions, and normal
                    operations of Carrier. If Leader is unable to secure a Carrier within estimated time for estimated
                    amount, and Customer is unwilling to increase the price, Leader reserves the right to cancel order,
                    without further liability on part of Leader.
                </li>
            </ol>
            <ol>
                <ol>
                    <li><strong>Guaranteed Rate</strong>. First Class Rate (FCR): The rate quoted for this option is
                        GUARANTEED and will not increase. The FCR has a GUARANTEED set day or next day pick up window
                        agreed between the customer and Leader. This timeline starts after the first day vehicle is
                        available for pick up. Leader will compensate carrier should an increase in price occur. If a
                        vehicle is not picked up within the time frame specified, Leader will incrementally increase the
                        carrier payment, but such increase will not affect the price quoted to the customer.
                    </li>
                </ol>
                <li>&nbsp;</li>
            </ol>
            <ol>
                <ol>
                    <li>In all types of orders, if Carrier fails to pick up or deliver a vehicle within the
                        aforementioned time frame due to unforeseen incidents beyond control of Carrier and Leader
                        (including but not limited to death, accident, orders of law enforcement, act of nature) or any
                        other legitimate reason, Leader will make reasonable effort to find another substitute Carrier
                        within the pickup window specified as soon as practically possible.
                    </li>
                    <li>Route Used by Carriers: Customer understands and agrees that Carrier, using good faith and sound
                        judgment, will transport vehicle from point of origin to destination by suitable route and does
                        not agree to any specific routing and/or method of transport in order to meet any specific
                        schedule or expectation of Customer
                    </li>
                    <li>If Customer, for any legitimate and unforeseeable reason, is unable to release vehicle when a
                        carrier was ready to pick up on the day marked as available by the customer, all guarantees are
                        void. In which case, Leader shall try to find another substitute Carrier based on accepted rate;
                        provided, however, if next available Carrier asks for more payment the customer will be liable
                        for the extra payment. If Customer does not accept and/or Customer wants to cancel contract,
                        Customer understands and accepts that he/she pays one hundred and ninety-nine dollars ($199) as
                        cancellation fee to Leader for services rendered in addition to the amount the carrier may
                        require for breach of contract.
                    </li>
                    <li>Upon Customer&rsquo;s request, Leader will arrange for the transportation of Customer&rsquo;s
                        Shipment by Carriers subject to these TERMS. Leader reserves the right, in its sole discretion,
                        to refuse or cancel any Order at any time and the reasons would involve the absence of the
                        carriers showing interest to the load(s) or etc&hellip;</li>
                    <li>Leader&rsquo;s services are deemed completed when a Carrier has accepted Customer&rsquo;s
                        Order.
                    </li>
                    <li>Customer understands and accepts that Leader (i) operates only as a transportation broker, (ii)
                        is not a motor carrier or transporter, and (iii) does not hold itself out as providing the
                        transportation of property.
                    </li>
                    <li>Customer expressly understands and agrees that Leader never takes custody or possession of,
                        transports, or handles Customer&rsquo;s Shipment, or assumes any liability for the Shipment.
                    </li>
                    <li>Leader shall provide customer with an estimated pickup and estimated delivery date: however,
                        delays may occur prior to, and/or during transport due to weather or road conditions, government
                        regulations, mechanical problems, and other causes that are beyond Leader&rsquo;s control.
                        Leader cannot and does not guarantee delivery dates or times. Customer understand and accepts
                        that Leader is not &ndash; responsible or liable for any losses or expenses caused by delays of
                        any kind or for any reason.
                    </li>
                    <li>Customer hereby authorizes Leader and Carrier to use information provided to contact Customer by
                        phone, email, or any other acceptable means for purpose of performing obligations under this
                        Agreement including but not limited to arrangement of pick up, and delivery of vehicle, securing
                        any payments Customer defaulted, and any other acceptable and justified reasons.
                    </li>
                </ol>
            </ol>
            <p>&nbsp;</p>
            <ol start="4">
                <li><strong> Customer&rsquo;s Responsibility</strong></li>
            </ol>
            <ol>
                <li><strong>Accuracy of Information</strong>. Customer understands and accepts that only Customer is
                    responsible to ensure the accuracy of all the details including the description of the Shipment
                    (year, make, model, body style, trim, etc.), Point of Origin, Destination, fees, and special
                    instructions in the Order Confirmation, and as applicable, on the Carrier&rsquo;s Form, Bill of
                    Lading, or other required documents. Any changes or corrections to the Shipment description or any
                    other changes to an Order may result in additional fees or cancellation of the Order. Customer
                    waives all claims against Leader for any additional charges or cancellation if the Shipment does not
                    match the Shipment listed in the Order Confirmation.
                </li>
                <li><strong>Shipment size and condition.&nbsp;</strong>Customer must inform Leader about the
                    Shipment&rsquo;s size and condition at the time of booking and prior to dispatching the order to
                    Carrier. Customer understands and accepts that if the Shipment is or becomes inoperable during the
                    transit, or if the Shipment (i) is modified from the original equipment manufacturer
                    (&ldquo;OEM&rdquo;) condition with features including but not limited to aftermarket spoilers,
                    lowered chassis, height modifications, etc., (ii) is oversized due to but not limited to dual or
                    oversized wheels, extra-large tires, racks, lifted chassis (iii) is a large vehicle such as a
                    limousine or a hearse, then the Carrier may charge additional fees to transport such Shipment or
                    refuse to transport the Shipment altogether.
                </li>
                <li><strong>Preparing Shipment.&nbsp;</strong>Customer understands and accepts that Customer is
                    responsible for preparing the Shipment for transportation. Customer must either secure or remove all
                    loose parts, fragile accessories, low hanging spoilers, etc. prior to shipment. Customer must remove
                    all non-permanent, outside mounted luggage and other racks prior to shipment. Shipment must be
                    tendered to Carrier in operable condition with no more than a quarter tank of fuel. Customer
                    understands and accepts that Customer is responsible for any damages, losses and claims to the
                    Shipment, other vehicles and/or persons which are caused by any part of the Shipment that becomes
                    loose or detached during the transport.
                </li>
                <li>Customer must disarm any alarm system installed in the Shipment or provide clear instructions for
                    disengaging it to the Carrier. In the event such alarm is activated during the transit, and there
                    are no keys or instructions to turn it off, Carrier may be forced to silence alarm by any reasonable
                    means available and without recourse by Customer.
                </li>
                <li><strong>Personal Property.&nbsp;</strong>Customer may leave one suitcase OR one bag carrying
                    personal property which shall not exceed one hundred pounds (100 lbs.) and must be confined to the
                    trunk or storage area of the Shipment. Customer must notify Leader and Carrier of such personal
                    property in the Shipment at the Point of Origin prior to loading of the Shipment. Customer
                    understands and accepts that the Carrier has the right to reject any personal property in the
                    Shipment if transporting such personal property is unsafe or violates the law. Customer is advised
                    not to leave any negotiable instruments, legal papers, jewelry, furs, money, cash or currency,
                    antiques, or any valuable articles in the Shipment. Customer understands and accepts that the
                    Carrier and Leader are not liable for personal items of any kind and value left in the Shipment, or
                    for damage to Shipment caused by excessive or improper loading of personal items. If Customer puts
                    personal property in the Shipment, Customer does so at Customer&rsquo;s own risk.
                </li>
                <li><strong>International Shipments.</strong>&nbsp;For overseas shipments (including Hawaii, Alaska)
                    vehicles must be empty, except for factory installed equipment. Any article left in the vehicle will
                    be removed at the shipper's expense. Vehicle must be tendered in a good running condition with no
                    more than a half tank of fuel. It is customer's responsibility to prepare the vehicle for the
                    shipment (washing the car, getting booking number, getting weight ticket).
                </li>
                <li><strong>Prohibited Items.&nbsp;</strong>Customer understands and accepts that Customer is expressly
                    prohibited from loading any explosives, guns, ammunition, weapons, flammable products, live pets,
                    live plants, any contraband, drugs or narcotics, alcoholic beverages, and or any illegal goods in
                    the Shipment. Customer understands and accepts that upon discovery, such prohibited items and/or the
                    Shipment may be confiscated or disposed of by law enforcement, or the Carrier and the Order may be
                    cancelled in entirety without any remuneration or compensation to Customer and Customer will be
                    solely responsible for any fees, fines, damages, or other liabilities arising from a violation of
                    this Section.
                </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="5">
                <li><strong> Customer Warranties</strong></li>
            </ol>
            <p>Customer warrants that Customer will comply with all applicable laws, rules, and regulations including
                but not limited to customs laws, import and export laws and governmental regulation of any country to,
                from, through or over which the Shipment may be carried. Customer agrees to furnish such information and
                documents as are necessary to comply with applicable laws, rules and regulations. Leader assumes no
                liability to Customer or to any other person for any loss or expense due to Customer&rsquo;s failure to
                comply with this provision. Any Customer&rsquo;s Agent and/or entity acting on behalf of Customer also
                warrants that it has the right to act on behalf of Customer and the right to legally bind Customer.</p>
            <ol start="6">
                <li><strong> Pickup And Delivery Of Shipment</strong></li>
            </ol>
            <ol>
                <li>Customer understands and accepts that a change to Point of Origin and/or Destination may be
                    necessary due to municipal zoning restrictions, road conditions, road closures, low hanging trees,
                    low hanging wires, narrow streets, residential area restrictions, etc.
                </li>
                <li>If the Carrier is unable to access the Point of Origin or Destination, Customer agrees to meet the
                    Carrier at an alternate location in order for the Carrier to safely pick up or drop off the
                    Shipment.
                </li>
                <li>Customer must be present at the Point of Origin and Destination for the pickup and/or delivery of a
                    Shipment, or Customer must designate a Customer&rsquo;s Agent if Customer is unavailable for any
                    reason.
                </li>
                <li>At the time of pickup at the Point of Origin, Customer or Customer&rsquo;s Agent agrees to 1)
                    carefully inspect the Shipment with the Carrier for pre-existing damage, and 2) acknowledge the
                    condition of the Shipment by a) noting any pre-existing damage on the Carrier Form or Bill of
                    Lading, b) signing the Carrier Form or Bill of Lading, and c) requesting a copy of same from the
                    Carrier. Customer or Customer&rsquo;s Agent is also urged to photograph the Shipment from all angles
                    at the Point of Origin.
                </li>
                <li>At the time of delivery at Destination, Customer or Customer Agent agrees to carefully inspect the
                    Shipment in the presence of the Carrier for possible transit damage and clearly notate any new
                    damage as exception on the Bill of Lading. Customer or Customer&rsquo;s Agent agrees to sign and
                    require a final copy of the Bill of Lading signed by the Carrier to serve as a final Shipment
                    condition report, especially in case of a dispute with the Carrier. Again, Customer or
                    Customer&rsquo;s Agent is urged to photograph the Shipment from all angles prior to signing the Bill
                    of Lading.
                </li>
                <li>Customer understands and accepts that Customer&rsquo;s or Customer Agent&rsquo;s signing of the
                    Carrier&rsquo;s Form or Bill of Lading at Destination without any notation of any damage regardless
                    of the lighting or weather conditions at the time of inspection, will serve as confirmation that
                    Customer received the Shipment at destination in satisfactory condition and that Leader and the
                    Carrier will have no further responsibility.
                </li>
                <li>Delayed Delivery: Leader shall use its best efforts to schedule Carrier to pick up and deliver
                    Customer&rsquo;s vehicle within scheduled time. If Carrier fails to deliver vehicle within 15 days
                    from date of promised delivery the vehicle has to be subjected to insurance claims as theft, loss,
                    or damages.
                </li>
                <li>Should any claim arise from or be related to transporting and delivery of Customer&rsquo;s vehicle,
                    any balance due to Carrier must be paid in full before claim shall be honoured; provided, however,
                    that claimed damage shall be noted on delivery bill of lading before tendering any COD payment.
                </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="7">
                <li><strong> Carrier Responsibilities</strong></li>
            </ol>
            <ol>
                <li>Carrier shall (i) pick up and deliver Customer&rsquo;s Shipment as close to Customer&rsquo;s door or
                    Customer&rsquo;s designated Point of Origin and Destination as legally and safely possible, and (ii)
                    transport the Shipment in a commercially reasonable manner.
                </li>
                <li>Carrier may issue a Carrier Form, receipt or Bill of Lading at the Point of Origin and/or
                    Destination. Customer or Customer&rsquo;s Agent agrees to read such Carrier Form carefully as it may
                    constitute a contract of transportation as between Customer and Carrier, and Customer will contact
                    Carrier directly with any disputes or questions regarding such documents.
                </li>
                <li>Customer understands and agrees that Customer may also be subject to the Carrier&rsquo;s terms and
                    conditions of service, tariffs, rules or classification, copies of which must be requested by the
                    Customer directly from the Carrier.
                </li>
                <li>Customer understands that shipment damage claims are covered by carrier from $100,000 up to $250,000
                    cargo insurance for all shipments loaded on the hauling equipment of the carrier. Also, carriers are
                    required to maintain a minimum of $750,000 public trucking liability coverage. Customer understands
                    that it is solely carrier&rsquo;s responsibility to maintain abovementioned insurance coverage
                    throughout the entire shipment duration.
                </li>
                <li>Customer understands that Leader does not carry any insurance specifically related to the
                    Customer&rsquo;s shipment and does not assume any liability for the Shipment.
                </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="8">
                <li><strong> Fees And Payment</strong></li>
            </ol>
            <ol>
                <li>Customer agrees to pay service fee once the shipment is scheduled and the rest on delivery spot to
                    driver in cash as per the terms of the Order Confirmation and these TERMS without any offsets,
                    chargebacks or reductions by Customer for any actual, pending or unfiled claims, losses, delays, or
                    damages. Payment for Leader&rsquo;s services is due when a Carrier accepts an Order as
                    Leader&rsquo;s services have been rendered at that point.
                </li>
                <li>All payments for the balance due to Carrier for C.O.D. must be made on or before the delivery of
                    Shipment in the form of cash or any certified funds. Customer WILL NOT use personal checks, debit or
                    credit card when making payments to the Carrier.
                </li>
                <li>If Shipment is placed in storage due to Customer&rsquo;s refusal to pay the fees or accept delivery
                    from the Carrier for any reason, then the Shipment may be placed in storage at Customer&rsquo;s
                    expense and subject to Carrier&rsquo;s lien for transportation charges until Customer pays in full
                    the outstanding balance. Any and all storage and redelivery charges will be the responsibility of
                    Customer and Customer agrees that Customer will not look to Leader for reimbursement.
                </li>
                <li>Use of Customer&rsquo;s Information: Leader places Customer&rsquo;s credit card information on file
                    and ensures the Customer of its security. Leader will not charge Customer any amount unless bid is
                    successful or contract is formed as indicated. Customer understands and agrees that Customer&rsquo;s
                    credit card will be immediately charged when contract is formed.
                </li>
                <li>Customer warrants that he/she will not seek to charge back a credit card or payments processed by
                    any method or stop a check payment to offset any dispute for damage claims. In case a customer
                    chargeback a transaction after service being rendered to the customer, Leader may use whatever legal
                    means justified to recover the fee. Further, Leader may share any and all customer information to
                    the collection agencies, and the law enforcement, and seek legal counsel. Customer will be liable
                    for any and all cost including but not limited to attorney&rsquo;s fees, chargeback fees, and other
                    incidental fees.
                </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="9">
                <li><strong> Cancellation And Refund Policy</strong></li>
            </ol>
            <ol>
                <li>Customer may cancel an Order at any time at no cost or cancellation fees as long as the Order has
                    not yet been accepted by a Carrier. If the Order is cancelled for any reason after a Carrier accepts
                    the Order, such reasons including but not limited to Customer cancelling an Order, Leader cancelling
                    an Order due to the Customer&rsquo;s breach of these TERMS or if the Carrier is denied pick up of
                    the Shipment for any reason when the Carrier arrives at the Point of Origin, then the Customer
                    agrees to pay a minimum of one hundred and ninety-nine dollars ($199) in cancellation fees as
                    Leader&rsquo;s services have been rendered at that point. Customer understands and accepts that the
                    Customer may be subject to additional cancellation fees including but not limited to a dry run fee
                    imposed by a Carrier and other vendors contracted to fulfill Customer&rsquo;s Order.
                </li>
                <li>Leader reserves the right to try up to 3 times to find a substitute carrier to pick up
                    customer&rsquo;s vehicle if the carrier assigned cancels the order. Only after the 3rd unsuccessful
                    try, the customer will be able to cancel and get a full refund from Leader.
                </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="10">
                <li><strong> Indemnification</strong></li>
            </ol>
            <p>Customer agrees to indemnify, defend and hold Leader and their employees, officers and directors harmless
                from and against any and all losses, liabilities, damages, payments, settlements, judgments, penalties,
                fines, expenses, (including attorneys&rsquo; fees), and costs, suits, actions and claims (whether
                actual, potential, threatened or pending), brought by any person or entity, including damages for injury
                or death of persons and/or damage to property, including real property and/or the environment, claim
                liability and damages, arising from the acts or omissions of Customer, its agents, employees or
                representatives.</p>
            <ol start="11">
                <li><strong> Limitation Of Liability</strong></li>
            </ol>
            <ol>
                <li>The total cumulative liability of Leader for any and all claims and damages, whether arising from
                    statute, contract, tort or otherwise, shall not under any circumstances exceed the total fees paid
                    by Customer to Leader for Leader&rsquo;s services under the respective Order Confirmation.
                </li>
                <li>Except as otherwise provided herein, Leader makes no warranties for any of its services and hereby
                    disclaims all warranties or representations, expressed or implied, including any implied warranties
                    of title, non &ndash; infringement, merchantability, fitness for a particular purpose or use, and
                    any warranties arising from course of dealing, usage or trade practice.
                </li>
                <li>Under no circumstances will Leader be liable or responsible for any direct, indirect, incidental,
                    consequential (Including damages from loss of business, lost profits, litigation, or the like),
                    Special, exemplary, punitive, or other damages, under any legal theory, arising out of or in any way
                    relating to a shipment or these terms, even if advised of the possibility of such damages.
                </li>
            </ol>
            <p>&nbsp;</p>
            <ol start="12">
                <li><strong> Arbitration</strong></li>
            </ol>
            <p>In the unlikely event Leader is unable to resolve a Customer dispute, claim or controversy arising out of
                or relating to these TERMS, an Order, Leader&rsquo;s services, or any other Customer engagement with
                Leader (&ldquo;Dispute&rdquo;) including Disputes that accrued before Customer accepted these TERMS,
                then Customer agrees to resolve all such Disputes through mandatory arbitration. The arbitration will be
                administered by the American Arbitration Association (&ldquo;AAA&rdquo;) in accordance with the
                AAA&rsquo;s Consumer Arbitration Rules and the Supplementary Procedures for Consumer Related
                Disputes.</p>
            <ol start="13">
                <li><strong> Miscellaneous</strong></li>
            </ol>
            <ol>
                <li>Leader shall be an independent contractor with respect to Customer, and nothing herein contained
                    shall be construed to be inconsistent with such relationship or status.
                </li>
                <li>Except as expressly set forth in these TERMS, Customer may not assign any rights hereunder without
                    Leader&rsquo;s prior written consent. These TERMS are binding on and inure to the benefit of the
                    parties and their respective successors and assigns.
                </li>
                <li>The invalidity or unenforceability of any provision of these TERMS shall not affect the validity or
                    enforceability of any other provisions herein.
                </li>
                <li>These TERMS supersede all prior written or oral representations and constitute the entire agreement
                    between Customer and Leader and may not be changed by anyone except for Leader. Customer warrants
                    that Customer has read these TERMS in their entirety and by continuing with the transaction, fully
                    understands and agrees to them.
                </li>
                <li>Customer waives any claims or defenses based in whole or in part on Customer not having read, not
                    knowing, or not understanding these TERMS.
                </li>
            </ol>
            <p>&nbsp;</p>
            <p><strong><em>Contact Information</em></strong></p>
            <p><em>Any question regarding this Agreement should be directed to the following address:<br/> <br/> Leader
                Auto Ship LLC.<br/> <br/> 979 oak forest Dr, Morrow Ohio 45152<br/> Phone:&nbsp;(567)666-4696<br/>
                <br/> Email:&nbsp;</em><em><u>admin@leaderautoship.com</u></em></p>
            <p>&nbsp;</p>
        </div>
        <Footer/>
    </div>
};

export default TermsAndConditions
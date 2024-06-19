import React, { useState, useEffect } from "react";
import "./ticketbooking.css";
import botProfile from "../../assets/logo (1).png"; // Ensure you have a bot profile image in this path
import userProfile from "../../assets/user-dp.png"; // Ensure you have a user profile image in this path

const TicketBooking = () => {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [welcomed, setWelcomed] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    time: "",
    seats: "",
    adults: "",
    children: "",
    safari: false,
    evVehicle: false,
    totalAmount: 0,
    upiId: "",
  });

  const questions = [
    "What is your name?",
    "What is your email?",
    "What is your phone number?",
    "How many adults are booking?",
    "How many children are booking?",
    "Do you want to add Safari?",
    "Do you want to add EV vehicle?",
    "Show total amount and choose 'continue' or 'cancel'.",
    "Enter your UPI ID to receive the QR ticket.",
  ];

  useEffect(() => {
    if (!welcomed) {
      setTimeout(() => {
        setMessages([
          { sender: "bot", text: "Welcome to Owltrek Ticket Booking Service" },
        ]);
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: questions[0] },
          ]);
          setWelcomed(true);
        }, 500);
      }, 500);
    }
  }, [welcomed, questions]);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Update messages with user input
    const newUserMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // Update ticket details based on step
    switch (step) {
      case 0:
        setTicketDetails({ ...ticketDetails, name: input });
        break;
      case 1:
        setTicketDetails({ ...ticketDetails, email: input });
        break;
      case 2:
        setTicketDetails({ ...ticketDetails, phone: input });
        break;
      case 3:
        setTicketDetails({ ...ticketDetails, adults: input });
        break;
      case 4:
        setTicketDetails({ ...ticketDetails, children: input });
        break;
      case 5:
        setTicketDetails({
          ...ticketDetails,
          safari: input.toLowerCase() === "yes",
        });
        break;
      case 6:
        setTicketDetails({
          ...ticketDetails,
          evVehicle: input.toLowerCase() === "yes",
        });
        break;
      case 7:
        // Calculate total amount (example calculation)
        const total = calculateTotal(ticketDetails);
        setTicketDetails({ ...ticketDetails, totalAmount: total });
        break;
      case 8:
        setTicketDetails({ ...ticketDetails, upiId: input });
        break;
      default:
        break;
    }

    // Update messages with bot response (next question or final message)
    if (step < questions.length - 1) {
      setTimeout(() => {
        if (step === 7) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: questions[step + 1] },
            {
              sender: "bot",
              text: "Type 'continue' to proceed or 'cancel' to abort.",
            },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: questions[step + 1] },
          ]);
        }
        setStep(step + 1);
      }, 500);
    } else {
      setTimeout(() => {
        const finalBotMessage = {
          sender: "bot",
          text: "Thank you for providing all the details. Your ticket booking is complete!",
        };
        setMessages((prevMessages) => [...prevMessages, finalBotMessage]);
      }, 500);
    }

    setInput(""); // Clear input field
  };

  const calculateTotal = (details) => {
    // Example calculation: 100 per adult, 50 per child, 200 for safari, 100 for EV vehicle
    let total =
      parseInt(details.adults) * 100 + parseInt(details.children) * 50;
    if (details.safari) {
      total += 200;
    }
    if (details.evVehicle) {
      total += 100;
    }
    return total;
  };

  const handleCancel = () => {
    // Reset all states
    setStep(0);
    setMessages([]);
    setInput("");
    setTicketDetails({
      name: "",
      email: "",
      phone: "",
      event: "",
      date: "",
      time: "",
      seats: "",
      adults: "",
      children: "",
      safari: false,
      evVehicle: false,
      totalAmount: 0,
      upiId: "",
    });
    setWelcomed(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message-container ${message.sender}`}
            >
              {message.sender === "bot" ? (
                <>
                  <img src={botProfile} alt="profile" className="profile-img" />
                  <div className={`chatbot-message ${message.sender}`}>
                    {message.text}
                  </div>
                </>
              ) : (
                <>
                  <div className={`chatbot-message ${message.sender}`}>
                    {message.text}
                  </div>
                  <img
                    src={userProfile}
                    alt="profile"
                    className="profile-img"
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="chatbot-input-container">
          <div className="search-chat-conatiner">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chatbot-input"
              placeholder="Type your answer..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
              onClick={handleSend}
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x bi-x-chat"
              viewBox="0 0 16 16"
              onClick={handleCancel}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;

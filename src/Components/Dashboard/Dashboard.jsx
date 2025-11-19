import { useState } from "react";
import {  useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { useAuth } from "../../Context/Authcontext";
import {
  Home,
  Upload,
  MessageCircle,
  Bell,
  User,
  Bookmark,
  MapPin,
  Calendar,
  Eye,
  Menu
} from "lucide-react";

// ------------------- SAMPLE CARD DATA -------------------
const cardData = [
  {
    id: 1,
    title: "Electronics Circuit Design Book",
    subject: "Electronics",
    author: "Rachel Green",
    roll: "21EC024",
    location: "Room 305",
    returnBy: "2024-02-20",
    trust: 94,
    primaryColor: "bg-purple-600",
    secondaryColor: "bg-purple-100",
    icon: "🔌",
  },
  {
    id: 2,
    title: "Data Structures Guide",
    subject: "Computer Science",
    author: "John Doe",
    roll: "21CS101",
    location: "Room 112",
    returnBy: "2024-03-05",
    trust: 88,
    primaryColor: "bg-blue-600",
    secondaryColor: "bg-blue-100",
    icon: "💻",
  },
  {
    id: 3,
    title: "Advanced Physics Notes",
    subject: "Physics",
    author: "Megan Fox",
    roll: "21PH056",
    location: "Room 210",
    returnBy: "2024-02-28",
    trust: 92,
    primaryColor: "bg-green-600",
    secondaryColor: "bg-green-100",
    icon: "🔭",
  },
  {
    id: 4,
    title: "Linear Algebra Workbook",
    subject: "Mathematics",
    author: "Alan Turing",
    roll: "21MA330",
    location: "Room 118",
    returnBy: "2024-03-10",
    trust: 90,
    primaryColor: "bg-yellow-600",
    secondaryColor: "bg-yellow-100",
    icon: "🧮",
  },
  {
    id: 5,
    title: "Embedded Systems Primer",
    subject: "Electronics",
    author: "Ada Lovelace",
    roll: "21EC110",
    location: "Room 402",
    returnBy: "2024-03-02",
    trust: 86,
    primaryColor: "bg-indigo-600",
    secondaryColor: "bg-indigo-100",
    icon: "🔧",
  },
  {
    id: 6,
    title: "Algorithms & Complexity",
    subject: "Computer Science",
    author: "Grace Hopper",
    roll: "21CS250",
    location: "Room 220",
    returnBy: "2024-02-25",
    trust: 95,
    primaryColor: "bg-red-600",
    secondaryColor: "bg-red-100",
    icon: "⚙️",
  },
];

// ------------------- MAIN COMPONENT -------------------
export default function ResourceFeed() {
  const [activeTab, setActiveTab] = useState("All");
  const [activePage, setActivePage] = useState("Feed");

  const tabs = [
    { key: "All", label: "All", icon: <Menu size={18} /> },
    { key: "Computer Science", label: "Computer Science", icon: <Upload size={18} /> },
    { key: "Electronics", label: "Electronics", icon: <MessageCircle size={18} /> },
    { key: "Mathematics", label: "Mathematics", icon: <MessageCircle size={18} /> },
    { key: "Physics", label: "Physics", icon: <MessageCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 flex justify-center">
      <div className="w-full max-w-[820px] px-6">

        {/* ---------------- FEED PAGE ---------------- */}
        {activePage === "Feed" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Resource Feed</h1>

            {/* Search */}
            <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-xl shadow-sm border">
              <input
                type="text"
                placeholder="Search resources..."
                className="flex-1 outline-none"
              />
              <span className="p-2 rounded-lg bg-gray-100">🔍</span>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-3 rounded-2xl border shadow-sm whitespace-nowrap ${
                    activeTab === tab.key
                      ? "bg-purple-600 text-white"
                      : "bg-white"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="space-y-5">
              {cardData
                .filter((item) => activeTab === "All" || item.subject === activeTab)
                .map((item) => (
                  <div
                    key={item.id}
                    className="
                      flex bg-white rounded-2xl shadow-xl p-6 max-w-[820px] mx-auto
                      transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
                    "
                  >
                    <div className={`w-28 flex items-center justify-center rounded-xl ${item.secondaryColor}`}>
                      <span className="text-4xl">{item.icon}</span>
                    </div>

                    <div className="flex-1 ml-5">
                      {/* Title Section */}
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-semibold">{item.title}</h2>
                          <p className="text-purple-600 text-sm">{item.subject}</p>
                        </div>
                        <Bookmark className="text-purple-500" />
                      </div>

                      <p className="mt-2 text-sm text-gray-700">
                        {item.author} • Roll: {item.roll}
                      </p>

                      {/* Info */}
                      <div className="mt-3 space-y-1 text-sm text-gray-700">
                        <p className="flex items-center gap-2">
                          <MapPin size={16} /> <b>Location:</b> {item.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <Calendar size={16} /> <b>Return by:</b> {item.returnBy}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="flex justify-between items-center mt-4 pt-3 border-t">
                        <span className="px-3 py-1 bg-yellow-300 rounded-xl text-sm font-semibold">
                          Trust: {item.trust}
                        </span>

                        <div className="flex items-center gap-3">
                          <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 flex items-center gap-2 hover:bg-gray-300 transition">
                            <Eye size={18} />
                            Preview
                          </button>

                          <button className="px-5 py-2 rounded-xl bg-purple-600 text-white flex items-center gap-2 hover:bg-purple-700 transition">
                            <Upload size={15} /> Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}

        {/* ---------------- OTHER PAGES ---------------- */}
        {activePage === "Chatbot" && <ChatbotUI />}
        {activePage === "Upload" && <UploadUI />}
        {activePage === "Alerts" && <AlertsUI />}
        {activePage === "Profile" && <ProfileUI />}
      </div>

      {/* ---------------- BOTTOM NAV ---------------- */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-xl border-t flex justify-center py-3">
        <div className="w-full max-w-[820px] flex justify-around">
          <NavItem icon={<Home size={22} />} label="Feed" active={activePage === "Feed"} onClick={() => setActivePage("Feed")} />
          <NavItem icon={<Upload size={22} />} label="Upload" active={activePage === "Upload"} onClick={() => setActivePage("Upload")} />
          <NavItem icon={<MessageCircle size={22} />} label="Chatbot" active={activePage === "Chatbot"} onClick={() => setActivePage("Chatbot")} />
          <NavItem icon={<Bell size={22} />} label="Alerts" active={activePage === "Alerts"} count={5} onClick={() => setActivePage("Alerts")} />
          <NavItem icon={<User size={22} />} label="Profile" active={activePage === "Profile"} onClick={() => setActivePage("Profile")} />
        </div>
      </div>
    </div>
  );
}

// ------------------- NAV ITEM COMPONENT -------------------
function NavItem({ icon, label, active, count, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer relative">
      {count && (
        <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
      <div className={active ? "text-purple-600" : "text-gray-500"}>{icon}</div>
      <span className={`text-xs ${active ? "text-purple-600" : "text-gray-500"}`}>{label}</span>
    </div>
  );
}

// ------------------- PAGE COMPONENTS -------------------


function ChatbotUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Add first welcome message on open
  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: "Hello! I'm your EduSwap assistant. How can I help you today?",
      },
    ]);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botAutoReply = {
      sender: "bot",
      text:
        "I can help you find resources, track your borrowed items, or answer questions about the platform. What would you like to know?",
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [...prev, botAutoReply]);
    }, 500);

    setInput("");
  };

  return (
    <div className="flex flex-col h-[88vh] p-4">

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded-xl shadow-inner space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] p-3 rounded-2xl ${
              msg.sender === "user"
                ? "ml-auto bg-purple-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input box */}
      <div className="mt-3 flex items-center gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-3 border rounded-2xl outline-none bg-white shadow-sm"
        />

        <button
          onClick={handleSend}
          className="p-3 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition flex items-center justify-center"
        >
          <Send size={22} />
        </button>
      </div>
    </div>
  );
}






function UploadUI() {
  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click(); // ⬅️ Opens native file picker
  };
  const handleuisubmit=()=>{
    alert("Resource submitted successfully!");
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Resource</h2>

      <div className="space-y-5">

        {/* Resource Title */}
        <div>
          <label className="block mb-1 font-medium">Resource Title</label>
          <input
            type="text"
            placeholder="Enter resource title"
            className="w-full p-3 border rounded-xl outline-none"
          />
        </div>

        {/* Subject Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Subject Category</label>
          <select className="w-full p-3 border rounded-xl outline-none">
            <option>Select Subject</option>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Information Science</option>
            <option>Aerospace Engineering</option>
            <option>Electrical Engineering</option>
            <option>Biomedical Engineering</option>
            <option>Chemical Engineering</option>
            <option>Physics</option>
            <option>Mathematics</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            rows="4"
            placeholder="Add description..."
            className="w-full p-3 border rounded-xl outline-none"
          ></textarea>
        </div>

        {/* Resource Type Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Resource Type</label>
          <select className="w-full p-3 border rounded-xl outline-none">
            <option>Select Type</option>
            <option>Digital</option>
            <option>Physical</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload File</label>

          {/* CLICKABLE UPLOAD BOX */}
          <div
            onClick={handleUploadClick}
            className="
              w-full p-6 border-2 border-dashed rounded-xl 
              flex flex-col items-center justify-center 
              text-gray-500 cursor-pointer hover:bg-gray-50
            "
          >
            <span className="text-4xl mb-2">📁</span>
            <p>Drag & drop files or click to upload</p>
          </div>

          {/* HIDDEN INPUT */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <button onClick={handleuisubmit} className="w-full py-3 bg-purple-600 text-white rounded-xl text-lg font-semibold hover:bg-purple-700">
          Submit Resource
        </button>

      </div>
    </div>
  );
}


import { CheckCircle, AlertTriangle, Info, Handshake } from "lucide-react";

function AlertsUI() {
  const notifications = [
    {
      id: 1,
      type: "success",
      icon: <CheckCircle className="text-green-600" size={22} />,
      message: "Your borrow request for 'Calculus Textbook' was approved!",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "warning",
      icon: <AlertTriangle className="text-yellow-600" size={22} />,
      message: "Reminder: Return 'Physics Lab Equipment' by Feb 10",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "info",
      icon: <Info className="text-blue-600" size={22} />,
      message: "New resource available in Computer Science",
      time: "2 hours ago",
    },
    {
      id: 4,
      type: "request",
      icon: <Handshake className="text-purple-600" size={22} />,
      message: "Sarah Johnson wants to borrow your 'Web Dev Notes'",
      time: "3 hours ago",
    },
    {
      id: 5,
      type: "success",
      icon: <CheckCircle className="text-green-600" size={22} />,
      message: "Your trust score increased to 95!",
      time: "1 day ago",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Notifications</h2>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
           className="
              bg-white p-4 rounded-xl  shadow-sm flex items-start gap-4
              transition-all duration-200
              hover:shadow-md hover:scale-[1.01] hover:bg-gray-50 cursor-pointer
            "
          >
            {/* Icon */}
            <div className="mt-1">{item.icon}</div>

            {/* Text */}
            <div>
              <p className="text-lg">{item.message}</p>
              <p className="text-gray-500 text-sm mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



import {  ChevronRight, FileText, LogOut } from "lucide-react";
import TermsModal from "../Termsmodel";

const ProfileUI = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) return null; // or return loading spinner

  // Create profile initials from user's name
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-3xl">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-5">
            
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center text-3xl font-semibold text-purple-700">
              {initials}
            </div>

            {/* User Details */}
            <div>
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-gray-600">Roll: {user.roll || "N/A"}</p>

              <span className="mt-2 inline-block bg-yellow-300 px-4 py-1 rounded-lg text-sm font-medium">
                Trust Score: 95/100
              </span>
            </div>
          </div>

          <hr className="my-6" />

          {/* Stats */}
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-purple-600 text-3xl font-bold">12</p>
              <p className="text-gray-600">Shared</p>
            </div>

            <div className="text-center">
              <p className="text-purple-600 text-3xl font-bold">8</p>
              <p className="text-gray-600">Borrowed</p>
            </div>

            <div className="text-center">
              <p className="text-purple-600 text-3xl font-bold">24</p>
              <p className="text-gray-600">Saved</p>
            </div>
          </div>
        </div>

        {/* Settings List */}
        <div className="mt-6 space-y-4">

          {/* Saved Items */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:bg-gray-100 hover:shadow-md cursor-pointer transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bookmark className="text-purple-600" />
                <span className="text-lg font-medium">Saved Items</span>
              </div>
              <ChevronRight />
            </div>
          </div>

          {/* Terms */}
          <div
            onClick={() => setShowTermsModal(true)}
            className="bg-white p-4 rounded-xl shadow-sm hover:bg-gray-100 hover:shadow-md cursor-pointer transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-purple-600" />
                <span className="text-lg font-medium">Terms & Conditions</span>
              </div>
              <ChevronRight />
            </div>
          </div>

          {showTermsModal && (
            <TermsModal onClose={() => setShowTermsModal(false)} />
          )}

          {/* Logout */}
          <div className="bg-white p-4 rounded-xl shadow-sm hover:bg-red-50 hover:shadow-md cursor-pointer transition-all">
            <div className="flex items-center gap-3 text-red-500">
              <LogOut />
              <span className="text-lg font-medium">Logout</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};




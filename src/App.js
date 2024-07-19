import logo from './logo.svg';
import './App.css';

function App() {

  const handleAddEventOutlook = () => {
    const createOutlookEventUrl = (title, start, end, details, location) => {
      const baseUrl = "https://outlook.live.com/calendar/0/deeplink/compose";
      const params = new URLSearchParams();
      params.append("path", "/calendar/action/compose");
      params.append("rru", "addevent");
      params.append("subject", title);
      params.append("startdt", start.toISOString());
      params.append("enddt", end.toISOString());
      params.append("body", details);
      params.append("location", location);
      return `${baseUrl}?${params.toString()}`;
    };

    // Usage
    const eventUrl = createOutlookEventUrl(
      "Team Meeting",
      new Date(2024, 0, 24, 14, 30), // Jan 24, 2024, 14:30 UTC
      new Date(2024, 0, 24, 15, 30), // Jan 24, 2024, 15:30 UTC
      "Discuss project updates",
      "Office 12B"
    );

    window.open(eventUrl);
  }

  const handleAddEventGoogle = () => {
    const createCalendarEventUrl = (title, start, end, details, location) => {
      const baseUrl = "https://calendar.google.com/calendar/u/0/r/eventedit";
      const params = new URLSearchParams();
      params.append("text", title);
      params.append("dates", `${formatDate(start)}/${formatDate(end)}`);
      params.append("details", details);
      params.append("location", location);
      params.append("action", "TEMPLATE");
      return `${baseUrl}?${params.toString()}`;
    };

    const formatDate = (date) => {
      // Convert date to 'YYYYMMDDTHHmmssZ' format
      return date.toISOString().replace(/-|:|\.\d+Z/g, '') + 'Z';
    };

    // Usage
    const eventUrl = createCalendarEventUrl(
      "Team Meeting",
      new Date(2024, 0, 24, 14, 30), // Jan 24, 2024, 14:30 UTC
      new Date(2024, 0, 24, 15, 30), // Jan 24, 2024, 15:30 UTC
      "Discuss project updates",
      "Office 12B"
    );

    window.open(eventUrl);
  }

  return (
    <div className="App">
      <button onClick={handleAddEventGoogle}>add google event</button>
      <button onClick={handleAddEventOutlook}>add outlook event</button>
    </div>
  );
}

export default App;

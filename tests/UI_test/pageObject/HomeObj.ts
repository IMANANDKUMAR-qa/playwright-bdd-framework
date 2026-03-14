// homeobj.ts
export class HomeObj {
  // Example: Search input on home page
  searchBox = "//input[@id='search']";

  // Example: Navigation links
  profileLink = "//a[contains(@href, 'profile')]";
  dashboardLink = "//a[contains(@href, 'dashboard')]";
  notificationsLink = "//a[contains(@href, 'notifications')]";

  // Example: Buttons on home page
  logoutButton = "//button[text()='Logout']";
  settingsButton = "//button[text()='Settings']";

  // Example: Labels or sections
  welcomeMessage = "//h1[contains(text(),'Welcome')]";
  recentActivitiesSection = "//div[@id='recent-activities']";
}
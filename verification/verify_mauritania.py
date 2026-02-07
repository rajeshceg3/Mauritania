from playwright.sync_api import sync_playwright
import time

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to app...")
        page.goto("http://localhost:4173")

        # Wait for content to load
        page.wait_for_selector('text=Arrival')

        # Take initial screenshot (Arrival)
        print("Taking Arrival screenshot...")
        time.sleep(5) # Wait for fade in and image load
        page.screenshot(path="verification/1_arrival.png")

        # Scroll to Wandering
        print("Scrolling to Wandering...")
        # Use a more specific selector if possible, or just text
        element = page.locator("text=Wandering").first
        element.scroll_into_view_if_needed()
        time.sleep(5) # Wait for animation and image load
        page.screenshot(path="verification/2_wandering.png")

        # Scroll to Pause
        print("Scrolling to Pause...")
        element = page.locator("text=Pause").first
        element.scroll_into_view_if_needed()
        time.sleep(5)
        page.screenshot(path="verification/3_pause.png")

        browser.close()

if __name__ == "__main__":
    verify_app()

const RunningFirefoxVersion = (navigator.userAgent.match(/Firefox\/([0-9.]+)/) || ["", "58.0"])[1];
const RunningAndroidVersion = navigator.userAgent.match(/Android [0-9.]+/) || "Android 6.0";

const EdgeMajorVersionToMimic = `${parseInt(RunningFirefoxVersion) + 4}.0.0.0`;
const EdgePhoneUA = EdgeUA = `Mozilla/5.0 (Linux; ${RunningAndroidVersion}; HLK-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${EdgeMajorVersionToMimic} Mobile Safari/537.36 EdgA/${EdgeMajorVersionToMimic}`
const EdgeTabletUA = `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${EdgeMajorVersionToMimic} Safari/537.36 Edg/${EdgeMajorVersionToMimic}`
function getUserAgentOverride(userAgent) {
  if (userAgent.includes("Mobile")) {
    return EdgePhoneUA;
  }
  if (userAgent.includes("Tablet")) {
    return EdgeTabletUA;
  }
  // Desktop mode requested.
  return EdgeTabletUA;
}

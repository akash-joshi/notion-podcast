import React, { useEffect, useRef, useState } from "react";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";

// audio link: https://cdn.blogcast.host/bakZCBWyKzocv4x9oHMzgsgUyCr3eyOYimGa4Tcn.mp3

const url =
  "https://cdn.blogcast.host/bakZCBWyKzocv4x9oHMzgsgUyCr3eyOYimGa4Tcn.mp3";

const episodeName = "AR/VR and implications in tech";
const podcastName = "Permissionless Learning";

export default function Embed() {
  const loggedIn = false;

  const [audioState, setAudioState] = useState<"pause" | "play">("pause");
  const audioObjectRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioObjectRef.current = new Audio(url);

    console.log(audioObjectRef.current.duration);
  }, [url]);

  useEffect(() => {
    if (audioObjectRef.current) {
      if (audioState === "play") {
        audioObjectRef.current.play();
      } else {
        audioObjectRef.current.pause();
      }
    }
  }, [audioState, audioObjectRef.current]);

  return (
    <div style={{ width: "90%", margin: "0 auto", marginTop: "1em" }}>
      {loggedIn ? (
        <div>Player</div>
      ) : (
        <div
          style={{
            padding: "",
            border: "1px solid #B0AFAF",
            borderRadius: 8
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: 170,
                width: 170,
                backgroundColor: "#E5E5E5",
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  border: "6px solid black"
                }}
              >
                {audioState === "play" ? (
                  <PauseOutlined
                    onClick={() => {
                      setAudioState("pause");
                    }}
                    style={{ fontSize: 50 }}
                  />
                ) : (
                  <CaretRightOutlined
                    onClick={() => {
                      setAudioState("play");
                    }}
                    style={{ fontSize: 50 }}
                  />
                )}
              </div>
            </div>

            <div>
              <div style={{ marginTop: 10, marginLeft: 20 }}>
                <div style={{ fontSize: 24 }}>{episodeName}</div>
                <div style={{ fontSize: 18, color: "#757575" }}>
                  {podcastName}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

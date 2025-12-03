"use client";

import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

interface RealtimeEvent {
	type:
		| "metric_update"
		| "campaign_change"
		| "budget_change"
		| "notification"
		| "transaction";
	organizationId: string;
	timestamp: Date;
	data: any;
	severity?: "info" | "warning" | "critical";
}

export function useRealtime(organizationId: string) {
	const [socket, setSocket] = useState<Socket | null>(null);
	const [isConnected, setIsConnected] = useState(false);
	const [events, setEvents] = useState<RealtimeEvent[]>([]);
	const [notifications, setNotifications] = useState<RealtimeEvent[]>([]);

	useEffect(() => {
		// Initialize socket connection
		const socketInstance = io(window.location.origin, {
			path: "/api/socket",
		});

		socketInstance.on("connect", () => {
			console.log("WebSocket connected");
			setIsConnected(true);

			// Join organization room
			socketInstance.emit("join-organization", organizationId);
		});

		socketInstance.on("disconnect", () => {
			console.log("WebSocket disconnected");
			setIsConnected(false);
		});

		// Listen for all event types
		socketInstance.on("metric_update", (event: RealtimeEvent) => {
			setEvents((prev) => [event, ...prev].slice(0, 50)); // Keep last 50 events
		});

		socketInstance.on("campaign_change", (event: RealtimeEvent) => {
			setEvents((prev) => [event, ...prev].slice(0, 50));
		});

		socketInstance.on("budget_change", (event: RealtimeEvent) => {
			setEvents((prev) => [event, ...prev].slice(0, 50));
		});

		socketInstance.on("notification", (event: RealtimeEvent) => {
			setNotifications((prev) => [event, ...prev].slice(0, 20));
			setEvents((prev) => [event, ...prev].slice(0, 50));
		});

		socketInstance.on("transaction", (event: RealtimeEvent) => {
			setEvents((prev) => [event, ...prev].slice(0, 50));
		});

		setSocket(socketInstance);

		return () => {
			socketInstance.emit("leave-organization", organizationId);
			socketInstance.disconnect();
		};
	}, [organizationId]);

	const clearNotifications = useCallback(() => {
		setNotifications([]);
	}, []);

	const dismissNotification = useCallback((index: number) => {
		setNotifications((prev) => prev.filter((_, i) => i !== index));
	}, []);

	return {
		socket,
		isConnected,
		events,
		notifications,
		clearNotifications,
		dismissNotification,
	};
}


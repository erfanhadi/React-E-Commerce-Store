import React from "react";
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router";

const Alert = ({ 
  variant = "info", 
  message, 
  className = "" 
}) => {
 
 
    const variantConfig = {
    info: {
      textColor: "text-blue-600",
      borderColor: "border-blue-600/20",
      bgColor: "bg-blue-500/10",
      icon: FaInfoCircle,
      buttonBg: "bg-blue-500",
      buttonHover: "hover:bg-blue-600"
    },
    success: {
      textColor: "text-green-600",
      borderColor: "border-green-600/20",
      bgColor: "bg-green-500/10",
      icon: FaCheckCircle,
      buttonBg: "bg-green-500",
      buttonHover: "hover:bg-green-600"
    },
    danger: {
      textColor: "text-orange-600",
      borderColor: "border-orange-600/20",
      bgColor: "bg-orange-500/10",
      icon: FaExclamationTriangle,
      buttonBg: "bg-orange-500",
      buttonHover: "hover:bg-orange-600"
    },
    error: {
      textColor: "text-red-600",
      borderColor: "border-red-600/20",
      bgColor: "bg-red-500/10",
      icon: FaTimesCircle,
      buttonBg: "bg-red-500",
      buttonHover: "hover:bg-red-600"
    }
  };

  const config = variantConfig[variant] || variantConfig.info;
  const Icon = config.icon;

  return (
    <div 
      className={`text-sm ${config.textColor} flex items-center justify-between  ${config.borderColor} ${config.bgColor} p-3 rounded-lg border ${className}`}
    >
      <div className="inline-flex items-center gap-2">
        <Icon className="text-lg" />
        <p>{message}</p>
      </div>
 
    </div>
  );
};

export default Alert;
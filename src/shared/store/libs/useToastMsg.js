import { toast } from "sonner";

export default function useToastMessage() {
  const toastSuccess = (message) => {
    toast.dismiss();
    toast.success(message);
  };

  const toastError = (message) => {
    toast.dismiss();
    toast.error(message);
  };

  const toastLoading = (message) => {
    toast.dismiss();
    toast.loading(message);
  };
  const toastWarning = (message) => {
    toast.dismiss();
    toast.warning(message);
  };
  return {
    toastSuccess,
    toastError,
    toastLoading,
    toastWarning,
  };
}

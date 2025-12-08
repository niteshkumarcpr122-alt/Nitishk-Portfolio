import PageTransition from "@/components/PageTransition";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-primary">04.</span> Contact
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Got a project in mind? Let's build something impossible.
            </p>
            
            <div className="space-y-4 mb-12 font-mono text-sm">
              <div className="flex items-center gap-4">
                <span className="text-primary">EMAIL</span>
                <a href="mailto:alex.nova@example.com" className="hover:text-white transition-colors">alex.nova@example.com</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-secondary">SOCIAL</span>
                <span className="text-muted-foreground">@alexnova_dev</span>
              </div>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-sm">
              <h4 className="font-display font-bold text-primary mb-2">Resume</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Download my CV to see full work history and certifications.
              </p>
              <button className="px-4 py-2 bg-primary text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors">
                Download PDF
              </button>
            </div>
          </div>

          <div className="bg-card p-8 border border-white/10 rounded-sm shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className="bg-black/50 border-white/10 focus:border-primary font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="bg-black/50 border-white/10 focus:border-primary font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-black/50 border-white/10 focus:border-primary font-mono resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-black hover:bg-white font-bold font-display uppercase tracking-widest text-sm py-6">
                  Send Transmission
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

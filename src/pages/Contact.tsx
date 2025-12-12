import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const messageText = formData.get('message') as string;

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: name.trim(),
            email: email.toLowerCase().trim(),
            subject: subject?.trim() || null,
            message: messageText.trim(),
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setStatus('success');
      setMessage('Message sent successfully! I\'ll get back to you soon.');
      (e.target as HTMLFormElement).reset();
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again or email me directly.');
      console.error('Contact form error:', error);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Section className="pt-32 md:pt-40">
        <SectionHeader
          badge="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it."
        />

        <div className="max-w-2xl mx-auto">
          <Card variant="glass" className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required disabled={isSubmitting} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject (Optional)</Label>
                <Input id="subject" name="subject" placeholder="Project inquiry, collaboration, etc." disabled={isSubmitting} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                    status === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  {message}
                </motion.div>
              )}
              
              <Button type="submit" variant="cosmic" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground text-sm mb-4">Or reach out directly:</p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="mailto:noxiumdev@proton.me">
                    <Mail size={16} />
                    Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://discord.com/invite/6k9TfVANtX" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={16} />
                    Discord
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
